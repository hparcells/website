import sendGrid from '@sendgrid/mail';
import sanitizeHtml from 'sanitize-html';

import { Question } from '../data/types';

function sanitize(string: string) {
  return sanitizeHtml(string, {
    allowedTags: [],
    allowedAttributes: {}
  });
}

export function initEmail() {
  sendGrid.setApiKey(process.env.SENDGRID_API_KEY as string);
}

export async function sendNewQuestionNotificationEmail(question: Question) {
  if (process.env.NODE_ENV === 'development') {
    return;
  }
  await sendGrid.send({
    to: 'me@hunterparcells.com',
    from: 'questions@hunterparcells.com',
    subject: 'New Question',
    html: `
      <p><strong>Question</strong>: ${sanitize(question.question)}</p>
      <p><strong>Email</strong>: ${
        (question.email && sanitize(question.email)) || 'None Provided'
      }</p>`
  });
}

export async function sendDeclinedQuestionNotificationEmail(question: Question) {
  if (!question.email) {
    return;
  }
  await sendGrid.send({
    to: question.email,
    from: 'questions@hunterparcells.com',
    subject: 'Question Declined',
    html: `<p>Your question has been declined for one reason or another.</p><p><strong>Question</strong>: ${sanitize(
      question.question
    )}</p>`
  });
}

export async function sendAnsweredQuestionNotificationEmail(question: Question) {
  if (!question.email) {
    return;
  }
  await sendGrid.send({
    to: question.email,
    from: 'questions@hunterparcells.com',
    subject: 'Your Question Has Been Answered',
    html: `Your question has been answered. Check it out <a href="https://hunterparcells.com/archives/questions/${question.id}">here</a>.
    `
  });
}
