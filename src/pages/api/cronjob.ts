/** @format */

// /** @format */

// import type { NextApiRequest, NextApiResponse } from 'next';
// import { Client } from '@upstash/qstash';

// type ResponseEmailNewsletter =
// 	| {
// 			error: string;
// 	  }
// 	| {
// 			message: string;
// 	  };

// export default async function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse<ResponseEmailNewsletter>
// ) {
// 	// reject if not POST
// 	if (req.method !== 'POST') {
// 		return res.status(405).json({ error: 'Method not allowed' });
// 	}

// 	// reject if no email
// 	if (!req.body.email) {
// 		return res.status(400).json({ error: 'Email is required' });
// 	}

// 	const c = new Client({
// 		token: process.env.QSTASH_TOKEN || '',
// 	});

// 	const { email } = req.body;
// 	console.log(email);
// 	await c.publishJSON({
// 		url: 'http://localhost:3000/api/email',
// 		body: { email: email },
// 	});

// 	console.log(`Newsletter added to QStash queue for ${email}`);

// 	return res
// 		.status(200)
// 		.json({ message: `Newsletter added to QStash queue for ${email}` });
// }

// // having some old
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { Client } from '@upstash/qstash';

// type ResponseEmailNewsletter =
// 	| {
// 			error: string;
// 	  }
// 	| {
// 			message: string;
// 	  };

// export default async function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse<ResponseEmailNewsletter>
// ) {
// 	// reject if not POST
// 	if (req.method !== 'POST') {
// 		return res.status(405).json({ error: 'Method not allowed' });
// 	}

// 	// reject if no email
// 	if (!req.body.email) {
// 		return res.status(400).json({ error: 'Email is required' });
// 	}

// 	const c = new Client({
// 		token: process.env.QSTASH_TOKEN || '',
// 	});
// 	const email = 'shivanshupathak814@gmail.com';
// 	// const { email } = req.body;
// 	console.log(email);

// 	// const c = new Client({
// 	//     token: process.env.QSTASH_TOKEN || "",
// 	//   });

// 	//   const email = "test-email@email.com";

// 	//   await c.publishJSON({
// 	//     url: `${process.env.VERCEL ? "https://" : ""}${
// 	//       process.env.NEXT_PUBLIC_VERCEL_URL
// 	//     }/api/newsletter`,
// 	//     body: { email: email },
// 	//   });

// 	try {
// 		await c.publishJSON({
// 			url: 'http://localhost:3000/api/email', // Update the URL with the correct endpoint
// 			body: { email: email },
// 		});

// 		console.log(`Newsletter added to QStash queue for ${email}`);

// 		return res
// 			.status(200)
// 			.json({ message: `Newsletter added to QStash queue for ${email}` });
// 	} catch (error) {
// 		console.error(error);
// 		return res.status(500).json({ error: 'Internal Server Error' });
// 	}
// }

// having new data
import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@upstash/qstash';

type ResponseEmailNewsletter =
	| {
			error: string;
	  }
	| {
			message: string;
	  };

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseEmailNewsletter>
) {
	// reject if not POST
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	// reject if no email
	if (!req.body.email) {
		return res.status(400).json({ error: 'Email is required' });
	}

	const c = new Client({
		token: process.env.QSTASH_TOKEN || '',
	});

	const { email } = req.body;

	await c.publishJSON({
		url: `${process.env.VERCEL ? 'https://' : ''}${
			process.env.NEXT_PUBLIC_VERCEL_URL
		}/api/email`,
		body: { email: email },
	});

	console.log(`Newsletter added to QStash queue for ${email}`);

	return res
		.status(200)
		.json({ message: `Newsletter added to QStash queue for ${email}` });
}
