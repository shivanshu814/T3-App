/** @format */

import { NextApiResponse, NextApiRequest } from 'next';
import { MongoClient } from 'mongodb';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		try {
			// Connect to MongoDB
			const uri =
				'mongodb+srv://mongodbdatabase:thisisdatabase@cluster0.xozqaay.mongodb.net/subscribe?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI
			const client = new MongoClient(uri);
			await client.connect();

			// Access the emails collection in your MongoDB database
			const db = client.db('subscribe'); // Replace with your database name
			const collection = db.collection('forms'); // Replace with your collection name

			// Query to find documents with the specified email
			const query = { village: 'hjfifjfhgdokjgokjd' };

			// Retrieve the email data from MongoDB
			const emailData = await collection.find(query).toArray();

			// Close the MongoDB connection
			await client.close();

			// Send the email data as the response
			console.log({ email: emailData });
			res.status(200).json({ email: emailData });
		} catch (error) {
			console.error('Error retrieving form data from MongoDB:', error);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
