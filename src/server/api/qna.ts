import { Request, Response, Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

import {
  deleteQuestion,
  getAnswer,
  getFeed,
  getQuestion,
  getQueue,
  submitAnswer,
  submitQuestion
} from '../database/qna';
import {
  sendAnsweredQuestionNotificationEmail,
  sendDeclinedQuestionNotificationEmail,
  sendNewQuestionNotificationEmail
} from '../email';
import { sendQuestionNotification } from '../discord';

import { isValidEmail } from '../../util/email';
import { validateApiKey } from '../database/user';

import { Question } from '../../data/types';

const router = Router();

async function isAuthorized(req: Request, res: Response) {
  const authorization = req.get('Authorization');
  if (!authorization) {
    return false;
  }

  const username = authorization.split('@')[0];
  const apiKey = authorization.split('@')[1];

  if (!(await validateApiKey(username, apiKey))) {
    return false;
  }
  return true;
}

router.get('/api/qna/feed', async (req, res) => {
  res.send(await getFeed());
});
router.get('/api/qna/queue', async (req, res) => {
  if (!(await isAuthorized(req, res))) {
    res.sendStatus(401);
    return;
  }
  res.send(await getQueue());
});
router.get('/api/qna/question/:id', async (req, res) => {
  const question = await getQuestion(req.params.id);
  if (question) {
    res.send(question);
    return;
  }
  res.sendStatus(404);
});
router.get('/api/qna/answer/:id', async (req, res) => {
  const answer = await getAnswer(req.params.id);
  if (answer) {
    res.send(answer);
    return;
  }
  res.sendStatus(404);
});
router.get('/api/qna/combo-meal/:questionId', async (req, res) => {
  const question = await getQuestion(req.params.questionId);
  if (question) {
    const answer = await getAnswer(question.answerId);
    if (answer) {
      res.send({
        question,
        answer
      });
      return;
    }
  }
  res.sendStatus(404);
});
router.post('/api/qna/send-question', async (req, res) => {
  const data: { question: string; email: string } = req.body;

  // Server-side data validation.
  if (!data.question) {
    res.sendStatus(500);
    return;
  }
  if (data.email && !isValidEmail(data.email)) {
    res.sendStatus(500);
    return;
  }

  const questionObject: Question = {
    id: uuidv4(),
    answerId: null,
    timestamp: Date.now(),
    question: data.question.trim(),
    email: data.email || null
  };
  await submitQuestion(questionObject);

  res.end();

  await sendQuestionNotification(questionObject);
  await sendNewQuestionNotificationEmail(questionObject);
});
router.post('/api/qna/send-answer', async (req, res) => {
  const data: { id: string; answer: string } = req.body;

  // Check if user is authorized.
  if (!(await isAuthorized(req, res))) {
    res.sendStatus(401);
    return;
  }

  // Server-side data validation.
  if (!data.id || !data.answer) {
    res.sendStatus(500);
    return;
  }

  await submitAnswer({
    id: uuidv4(),
    questionId: data.id,
    answer: data.answer.trim(),
    timestamp: Date.now()
  });
  res.end();

  const question = await getQuestion(data.id);
  await sendAnsweredQuestionNotificationEmail(question as any);
});

router.post('/api/qna/delete-question', async (req, res) => {
  // Check if user is authorized.
  if (!(await isAuthorized(req, res))) {
    res.sendStatus(401);
    return;
  }

  const question = await getQuestion(req.body.id);
  if (question && question.email && !question.answerId) {
    await sendDeclinedQuestionNotificationEmail(question as any);
  }

  const data = req.body;
  await deleteQuestion(data.id);

  res.end();
});

export default router;
