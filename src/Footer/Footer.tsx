/** @format */

import {
	Box,
	chakra,
	Container,
	Link,
	SimpleGrid,
	Stack,
	Text,
	VisuallyHidden,
	Input,
	IconButton,
	useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const Logo = (props: any) => {
	return (
		<svg
			width='150px'
			height='80px'
			viewBox='0 0 1024 1024'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M512 512m-480 0a480 480 0 1 0 960 0 480 480 0 1 0-960 0Z'
				fill='#E5F1FF'
			/>
			<path
				d='M512 179.2c-96 102.4-262.4 236.8-262.4 384s115.2 262.4 262.4 262.4 262.4-115.2 262.4-262.4-160-281.6-262.4-384z'
				fill='#9FC8FE'
			/>
			<path
				d='M512 684.8c-57.6 0-102.4-44.8-102.4-108.8 0-57.6 64-102.4 102.4-147.2 38.4 44.8 102.4 89.6 102.4 147.2 0 57.6-44.8 108.8-102.4 108.8z'
				fill='#72AEFD'
			/>
		</svg>
	);
};

const SocialButton = ({
	children,
	label,
	href,
}: {
	children: ReactNode;
	label: string;
	href: string;
}) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
			}}>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

const ListHeader = ({ children }: { children: ReactNode }) => {
	return (
		<Text fontWeight={'500'} fontSize={'lg'} mb={2}>
			{children}
		</Text>
	);
};

export default function LargeWithNewsletter() {
	const [email, setEmail] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};
	// this helps in call the api which exists in /src/pages/api/email.ts
	const makiApiCall = async () => {
		try {
			await fetch('/api/email', {
				method: 'POST',
				// have to manage like that so data take from user and show in backend which is terminal
				body: JSON.stringify({ email }),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			setEmail('');
		} catch (error) {
			console.error('Error sending email:', error);
		}
	};

	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}>
			<Container as={Stack} maxW={'6xl'} py={10}>
				<SimpleGrid
					templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
					spacing={8}>
					<Stack spacing={6}>
						<Box>
							<Logo color={useColorModeValue('gray.700', 'white')} />
						</Box>
						<Text fontSize={'sm'}>
							© 2023 Bhujal Sarvekshan Kendra. All rights reserved
						</Text>
						<Stack direction={'row'} spacing={6}>
							<SocialButton label={'Twitter'} href={'#'}>
								<FaTwitter />
							</SocialButton>
							<SocialButton label={'YouTube'} href={'#'}>
								<FaYoutube />
							</SocialButton>
							<SocialButton label={'Instagram'} href={'#'}>
								<FaInstagram />
							</SocialButton>
						</Stack>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>Company</ListHeader>
						<Link href={'#'}>About us</Link>
						<Link href={'#'}>Blog</Link>
						<Link href={'#'}>Contact us</Link>
						<Link href={'#'}>Pricing</Link>
						<Link href={'#'}>Testimonials</Link>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>Support</ListHeader>
						<Link href={'#'}>Help Center</Link>
						<Link href={'#'}>Terms of Service</Link>
						<Link href={'#'}>Legal</Link>
						<Link href={'#'}>Privacy Policy</Link>
						<Link href={'#'}>Satus</Link>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>Stay up to date</ListHeader>

						<Stack direction={'row'}>
							<Input
								// defining the type and value taking and onchange what to do
								name='email'
								placeholder={'Your email address'}
								bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
								border={0}
								_focus={{
									bg: 'whiteAlpha.300',
								}}
								value={email} // Bind the input value to the email state
								onChange={handleInputChange} // Handle input change and update the email state
							/>
							<IconButton
								// this line helps to call api just on click
								onClick={makiApiCall}
								bg={useColorModeValue('green.400', 'green.800')}
								color={useColorModeValue('white', 'gray.800')}
								_hover={{
									bg: 'green.600',
								}}
								aria-label='Subscribe'
								icon={<BiMailSend />}
							/>
						</Stack>
					</Stack>
				</SimpleGrid>
			</Container>
		</Box>
	);
}
