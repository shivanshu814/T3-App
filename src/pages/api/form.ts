/** @format */

import { connectToMongoDB } from 'lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import Form from 'models/applicationform';

connectToMongoDB();
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		console.log('Received request body:', req.body);

		const name = req.body.name;
		const address = req.body.address;
		const pincode = req.body.pincode;
		const state = req.body.state;
		const district = req.body.district;
		const phone = req.body.phone;
		const fatherName = req.body.fatherName;
		const village = req.body.village;
		const language = req.body.language;

		const newApplication = new Form({
			name,
			address,
			pincode,
			state,
			district,
			phone,
			fatherName,
			village,
			language,
		});
		await newApplication.save();

		console.log('Received Name:', name);
		console.log('Received Address:', address);
		console.log('Received Pincode:', pincode);
		console.log('Received State:', state);
		console.log('Received District:', district);
		console.log('Received Phone:', phone);
		console.log('Received Fathers Name:', fatherName);
		console.log('Received Village:', village);
		console.log('Set Language was:', language);

		res.status(200).json({ Data: 'Data Saved Successfully' });
	} catch (error) {
		console.error('Error saving form data to database:', error);
		res
			.status(500)
			.json({ success: false, error: 'Error saving form data to database' });
	}
};
export default handler;
