import axios from 'axios';
import { randomOf } from '@reverse/random';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const otherList: string = (await axios.get('https://otherzone.net/list.txt')).data;
  const otherItems = otherList.split('\r\n');
  const other = randomOf(otherItems);

  res.send(other);
}
