/** @format */

import { Schema, model, models } from 'mongoose';
const SubscribeSchema = new Schema({
	email: String,
});

const Subscribe = models.Subscribe || model('Subscribe', SubscribeSchema);
export default Subscribe;
