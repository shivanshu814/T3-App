/** @format */

import { HStack, Center } from '@chakra-ui/react';
import { SignIn } from '@clerk/nextjs';

export default function Page() {
	return (
		<Center>
			<SignIn />
		</Center>
	);
}
