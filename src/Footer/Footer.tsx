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
	Link as ChakraLink,
	Center,
} from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Logo = (props: any) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
			whileHover={{ scale: 1.05 }}>
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
		</motion.div>
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
		await fetch('/api/cronjob', {
			method: 'POST',
			body: JSON.stringify({ email: email }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		console.log('Submitted email to newsletter API endpoint');
	};

	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}>
			<Box mt={8} overflow='hidden' borderRadius='lg'>
				<iframe
					width='100%'
					height='400'
					frameBorder='0'
					scrolling='no'
					marginHeight={0}
					marginWidth={0}
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.703849040398!2d79.97795631536494!3d24.5870419841744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4f4c9f3341f2c7%3A0x97b6731da8531d99!2sGali%20Number%203%2C%20Siddhart%20Nagar%2C%20Satna%2C%20Madhya%20Pradesh%20485001%2C%20India!5e0!3m2!1sen!2sus!4v1622563270834!5m2!1sen!2sus'
					title='Google Map'
					allowFullScreen></iframe>
			</Box>
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
						<Link href={'/privacy'}>Privacy Policy</Link>
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
				<ChakraLink color='blue.500' href='/privacy' isExternal mt={2}>
					Privacy Policy
				</ChakraLink>
			</Box>
		</Box>
	);
}
