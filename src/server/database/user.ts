import { db } from '../index';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

export async function userExists(username: string) {
  return await db.collection('users').findOne({ username });
}

export async function ensureDefaultUser() {
  if (!(await userExists('hunterparcells'))) {
    db.collection('users').insertOne({
      username: 'hunterparcells',
      password: await bcrypt.hash(process.env.DEFAULT_PASSWORD as string, 12),
      apiKey: crypto.randomBytes(32).toString('hex')
    });
  }
}

export async function tryLogin(username: string, password: string) {
  const user = await userExists(username);
  if (!user) {
    return false;
  }
  return await bcrypt.compare(password, user.password);
}

export async function getApiKey(username: string) {
  const user = await userExists(username);
  if (!user) {
    return null;
  }
  return user.apiKey;
}

export async function validateApiKey(username: string, apiKey: string) {
  return (await getApiKey(username)) === apiKey;
}
