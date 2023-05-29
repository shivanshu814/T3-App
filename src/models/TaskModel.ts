/** @format */

// /** @format */

// import mongoose from 'mongoose';

// const EmailSchema = new mongoose.Schema({
// 	email: {
// 		type: String,
// 		required: true,
// 	},
// });

// const Email = mongoose.model('Email', EmailSchema);

// export default Email;


import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the document
interface IUser extends Document {
	email: string;
}

// Define the schema
const userSchema: Schema = new Schema({
	email: { type: String, required: true },
});

// Create the model
const User = mongoose.model<IUser>('User', userSchema);

export default User;
