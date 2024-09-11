// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {autos, AutoTypes} from './data/data';

type Data = AutoTypes[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    res.status(200).json(autos);
}
