/** @format */

import mongoose from 'mongoose';
export const connectMongoDB = async () => {
	if (mongoose.connection.readyState === 1) {
		// If the connection is already established, return the existing connection
		return mongoose.connection;
	}

	try {
		await mongoose.connect(process.env.MONGODB_URI || '', {
			useUnifiedTopology: true,
		} as any);
		console.log('MongoDB connected successfully!');
		return mongoose.connection;
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
		throw error;
	}
};
