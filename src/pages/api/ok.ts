/** @format */

import { NextApiRequest, NextApiResponse } from 'next';

export default function (req: NextApiRequest, res: NextApiResponse) {
	res.json({ status: 'ok' });
}
