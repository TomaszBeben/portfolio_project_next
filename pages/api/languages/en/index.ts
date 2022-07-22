// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { english_language } from './english'
import { languageApiType } from '../../../../types/languageApiType';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<languageApiType>
) {
  res.status(200).json(english_language)
}
