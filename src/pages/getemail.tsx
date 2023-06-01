/** @format */
// ...

import { Box, IconButton, Input, Stack, Text } from '@chakra-ui/react';
import { SetStateAction, useEffect, useState } from 'react';
import { BiMailSend } from 'react-icons/bi';

export default function LargeWithNewsletter() {
	const [email, setEmail] = useState('');

	const handleInputChange = (event: {
		target: { value: SetStateAction<string> };
	}) => {
		setEmail(event.target.value);
	};

	const getEmailData = async () => {
		try {
			const response = await fetch('/api/getemail');
			const data = await response.json();
			setEmail(JSON.stringify(data.email));
		} catch (error) {
			console.error('Error retrieving email data:', error);
		}
	};

	useEffect(() => {
		getEmailData();
	}, []);

	return (
		<Box>
			<Stack direction={'row'}>
				{/* <IconButton
					onClick={getEmailData}
					_hover={{
						bg: 'green.600',
					}}
					aria-label='Subscribe'
					icon={<BiMailSend />}
				/> */}
				<Text>{email}</Text>
			</Stack>
		</Box>
	);
}
