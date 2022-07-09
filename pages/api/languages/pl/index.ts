// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { polish_sidebar } from './polish'
import { IconType } from 'react-icons';

type Data = {
  name: string;
  icon: IconType;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(polish_sidebar)
}
