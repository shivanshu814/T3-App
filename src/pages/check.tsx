/** @format */

// pages/index.tsx

import {
	Box,
	Flex,
	Heading,
	Text,
	Button,
	Link as ChakraLink,
	VStack,
	SlideFade,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
	const [showAnimation, setShowAnimation] = useState(false);

	useEffect(() => {
		// Delay showing the animation for a smoother loading experience
		const timeout = setTimeout(() => {
			setShowAnimation(true);
		}, 10000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<Box textAlign='center' p={8}>
			<Flex justify='space-between' align='center' mb={8}>
				<Heading as='h1' size='xl'>
					Groundwater Monitoring
				</Heading>
				<Link href='/monitoring' passHref>
					<Button colorScheme='blue' size='lg'>
						Get Started
					</Button>
				</Link>
			</Flex>

			<SlideFade in={showAnimation} offsetY='-20px'>
				<VStack spacing={4}>
					<Text fontSize='xl'>Welcome to Groundwater Monitoring</Text>
					<Text fontSize='xl'>
						Track and manage groundwater levels effectively.
					</Text>
				</VStack>
			</SlideFade>
		</Box>
	);
};

const Footer: React.FC = () => {
	return (
		<Box
			as='footer'
			p={4}
			mt={8}
			borderTop='1px solid'
			borderColor='gray.200'
			textAlign='center'>
			<Text fontSize='sm'>
				© {new Date().getFullYear()} Groundwater Monitoring. All rights
				reserved.
			</Text>
			<ChakraLink color='blue.500' href='https://example.com' isExternal mt={2}>
				Privacy Policy
			</ChakraLink>
		</Box>
	);
};

export default HomePage;
