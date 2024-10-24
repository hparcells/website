import { db } from '../index';

import { Question, Answer } from '../../data/types';

export async function submitQuestion(question: Question) {
  await db
    .collection(`questions${process.env.NODE_ENV === 'development' ? '.dev' : ''}`)
    .insertOne(question);
}
export async function submitAnswer(answer: Answer) {
  await db
    .collection(`answers${process.env.NODE_ENV === 'development' ? '.dev' : ''}`)
    .insertOne(answer);
  await db
    .collection(`questions${process.env.NODE_ENV === 'development' ? '.dev' : ''}`)
    .updateOne({ id: answer.questionId }, { $set: { answerId: answer.id } });
}

export async function getQuestion(uuid: string) {
  return await db
    .collection(`questions${process.env.NODE_ENV === 'development' ? '.dev' : ''}`)
    .findOne({ id: uuid });
}
export async function getAnswer(uuid: string) {
  return await db
    .collection(`answers${process.env.NODE_ENV === 'development' ? '.dev' : ''}`)
    .findOne({ id: uuid });
}

export async function deleteAnswer(uuid: string) {
  return await db
    .collection(`answers${process.env.NODE_ENV === 'development' ? '.dev' : ''}`)
    .deleteOne({ id: uuid });
}
export async function deleteQuestion(uuid: string) {
  const question = await getQuestion(uuid);

  await db
    .collection(`questions${process.env.NODE_ENV === 'development' ? '.dev' : ''}`)
    .deleteOne({ id: uuid });

  // UNTESTED
  // Made for moderating the actual page if someone's logged in.
  if (question && question.answerId) {
    await deleteAnswer(question.answerId);
  }
}

export async function getFeed() {
  const questions = await db
    .collection(`questions${process.env.NODE_ENV === 'development' ? '.dev' : ''}`)
    .find({ answerId: { $ne: null } })
    .toArray();
  const items = await Promise.all(
    questions.map(async (question) => {
      return { question, answer: await getAnswer(question.answerId) };
    })
  );

  // Return descending time.
  return items.sort((a, b) => {
    return b.question.timestamp - a.question.timestamp;
  });
}
export async function getQueue() {
  const questions = await db
    .collection(`questions${process.env.NODE_ENV === 'development' ? '.dev' : ''}`)
    .find({ answerId: { $eq: null } })
    .toArray();
  return questions;
}
