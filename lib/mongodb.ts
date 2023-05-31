/** @format */

import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
	const MONGODB_URI =
		'mongodb+srv://mongodbdatabase:thisisdatabase@cluster0.xozqaay.mongodb.net/subscribe?retryWrites=true&w=majority';
	try {
		const { connection } = await mongoose.connect(MONGODB_URI);
		if (connection.readyState === 1) {
			console.log('MongoDB connection established');
			return Promise.resolve(true);
		}
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
		return Promise.reject(error);
	}
};
