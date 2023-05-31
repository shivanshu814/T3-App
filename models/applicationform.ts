/** @format */

import { Schema, model, models } from 'mongoose';
const FormSchema = new Schema({
	name: String,
	address: String,
	pincode: Number,
	state: String,
	district: String,
	phone: Number,
	fatherName: String,
	village: String,
	language: String,
});

const Form = models.Form || model('Form', FormSchema);
export default Form;
