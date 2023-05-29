/* @format */

import express, { Request, Response } from 'express';

const app = express();

// Middleware to parse request body as JSON
app.use(express.json());

// POST /api/email
app.post('/api/subscribe', (req: Request, res: Response) => {
	const email = req.body.email;

	if (!email) {
		return res.status(400).json({ message: 'Email is required' });
	}

	// Perform any additional validation or processing here
	// For simplicity, this example assumes no further processing

	console.log('Received email:', email);

	res.json({ message: 'Email received successfully' });
});

// Start the server
app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
