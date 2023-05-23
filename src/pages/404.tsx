/** @format */

import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';

export default function ErrorPage() {
	return (
		<>
			<Container maxW={'3xl'}>
				<Stack
					as={Box}
					textAlign={'center'}
					spacing={{ base: 8, md: 14 }}
					py={{ base: 20, md: 36 }}>
					<Heading
						display='flex'
						flexDirection='column'
						rowGap='20px'
						fontWeight={600}
						fontSize={{ base: '2xl', sm: '2xl', md: '4xl' }}
						lineHeight={'110%'}>
						Error 404 <br />
						<Text color={'brand.100'}>
							According to the Bhujal Sarvekshan Kendra, <br /> this page does
							not exist 🥺🥺🥺
						</Text>
					</Heading>
				</Stack>
			</Container>
		</>
	);
}
