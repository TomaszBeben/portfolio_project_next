// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { polish_language } from './polish'
import { languageApiType } from '../../../../types/languageApiType';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<languageApiType>
) {
  res.status(200).json(polish_language)
}
