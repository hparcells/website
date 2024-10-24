import { Client, EmbedBuilder } from 'discord.js';

import { Question } from '../data/types';

let client: Client;

export async function initBot() {
  client = new Client({
    intents: []
  });
  if (process.env.NODE_ENV === 'development') {
    await client.login(process.env.DEV_DISCORD_TOKEN);
  } else {
    await client.login(process.env.DISCORD_TOKEN);
  }
}
export async function sendQuestionNotification(question: Question) {
  const user = await client.users.fetch(process.env.DM_ID as string);

  user.send({
    embeds: [
      new EmbedBuilder()
        .setColor(0xfd252f)
        .setTitle('New Question')
        .setDescription(question.question)
        .setTimestamp(new Date(question.timestamp))
        .addFields([
          {
            name: 'Email',
            value: question.email || 'None Provided',
            inline: false
          }
        ])
    ]
  });
}
