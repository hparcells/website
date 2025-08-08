/* eslint-disable no-console */

import express, { Request, Response } from 'express';
import next from 'next';
import { log, server as serverLog, error } from 'log-type';
import { MongoClient, Db } from 'mongodb';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';

import qnaRouter from './api/qna';
import userRouter from './api/user';

import { initBot } from './discord';
import { ensureDefaultUser } from './database/user';
import { initEmail, sendNewQuestionNotificationEmail } from './email';

dotenv.config();

const env = process.env.NODE_ENV || 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
const port = process.env.PORT || 8000;

const app = next({ dev: isDevelopment });
const handler = app.getRequestHandler();

export let db: Db;
const databaseUrl = `mongodb://hunter:${encodeURIComponent(
  process.env.DATABASE_PASSWORD as string
)}@${isDevelopment ? 'vps.hunterparcells.com' : '0.0.0.0'}:27017`;
const mongoClient = new MongoClient(databaseUrl);

function databaseLog(message: string) {
  log('[DATABASE]', 'green', message);
}
function botLog(message: string) {
  log('[BOT]', 'red', message);
}

(async () => {
  try {
    serverLog('Starting the server...');
    await app.prepare();
    const server = express();

    // Middleware
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    // Routers
    server.use('', qnaRouter);
    server.use('', userRouter);

    // Web server.
    server.all('*', (req: Request, res: Response) => {
      return handler(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) {
        throw err;
      }
      serverLog(`Ready on http://localhost:${port}`);
      serverLog(`NODE_ENV: ${env}`);
      serverLog('Server startup complete.');
    });

    // Setup database.
    if (process.env.DATABASE_PASSWORD) {
      databaseLog(`Connecting to the database at ${databaseUrl}...`);
      await mongoClient.connect();
      databaseLog('Connected to the database.');
      db = mongoClient.db('hunterparcells');
      await ensureDefaultUser();
    } else {
      databaseLog('No database password provided, skipping database setup.');
    }

    // Setup bot.
    if (process.env.DEV_DISCORD_TOKEN) {
      botLog('Starting the bot...');
      await initBot();
      botLog('Bot started.');
    } else {
      botLog('No Discord token provided, skipping bot setup.');
    }

    // SendGrid
    initEmail();
  } catch (e) {
    error(e as any);
    process.exit(1);
  }
})();

export {};
