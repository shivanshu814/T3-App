/** @format */

import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const body = req.body;
	console.log(body);
	console.log('cookies');
	console.log(req.cookies);
	res.status(200).end();
	// .end is removed and send as json({})
	// console.log(req.cookies);
	// for accesing the cookies

	// for accesing the headers
	console.log('headers');
	console.log(req.headers);
};
export default handler;
