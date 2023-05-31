/** @format */

import { connectToMongoDB } from 'lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import Subscribe from 'models/subscribe';

connectToMongoDB();
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		console.log('Received request body:', req.body);
		const email = req.body;
		const newSubscriber = new Subscribe({ email });
		await newSubscriber.save();
		console.log('Received email:', email);
		res.status(200).json({ success: true });
	} catch (error) {
		console.error('Error saving email to database:', error);
		res
			.status(500)
			.json({ success: false, error: 'Error saving email to database' });
	}
};
export default handler;
