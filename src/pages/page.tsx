/** @format */
'use client';
export default function Home() {
	const makiApiCall = async () => {
		await fetch('/api/email', {
			method: 'POST',
			body: JSON.stringify({ hello: 'world' }),
		});
	};
	return <button onClick={makiApiCall}>Make Call</button>;
}
