/** @format */

import { Box, Heading, Text, useColorMode } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

const PrivacyPolicy: NextPage = () => {
	const { colorMode } = useColorMode();
	const isDarkMode = colorMode === 'dark';

	return (
		<>
			<Head>
				<title>Bhujal Sarvekshan Kendra</title>
				<meta name='description' content='Generated by Shivanshu Pathak' />
				<link rel='icon' href='/Earth.ico' />
			</Head>
			<Box
				bg={isDarkMode ? 'gray.900' : 'gray.50'}
				color={isDarkMode ? 'white' : 'black'}
				p={[4, 8, 12]}>
				<Heading
					as='h1'
					mb={8}
					fontSize={['3xl', '4xl']}
					textAlign='center'
					color={isDarkMode ? 'white' : 'black'}>
					Privacy Policy
				</Heading>

				<Box
					bg={isDarkMode ? 'gray.800' : 'white'}
					color={isDarkMode ? 'white' : 'black'}
					p={[6, 8, 10]}
					borderRadius='xl'
					boxShadow={isDarkMode ? 'dark-lg' : 'lg'}>
					<Text fontSize={['lg', 'xl']} mb={6}>
						This Privacy Policy describes how the Ground Water Survey Center
						collects, uses, and discloses personal information when you use our
						website and services.
					</Text>

					<Heading
						as='h2'
						fontSize={['xl', '2xl']}
						my={6}
						color={isDarkMode ? 'teal.300' : 'teal.500'}>
						Information Collection and Use
					</Heading>
					<Text mb={6}>
						The Ground Water Survey Center may collect personal information from
						you when you voluntarily provide it to us. This information may
						include your name, email address, contact details, and any other
						information you choose to provide.
					</Text>
					<Text mb={6}>
						We use the collected information for various purposes, including but
						not limited to providing and improving our services, responding to
						your inquiries, and communicating with you.
					</Text>

					<Heading
						as='h2'
						fontSize={['xl', '2xl']}
						my={6}
						color={isDarkMode ? 'teal.300' : 'teal.500'}>
						Data Protection and Security
					</Heading>
					<Text mb={6}>
						The Ground Water Survey Center takes reasonable measures to protect
						the personal information we collect and store. However, please note
						that no method of transmission or storage is completely secure, and
						we cannot guarantee the absolute security of your information.
					</Text>

					<Heading
						as='h2'
						fontSize={['xl', '2xl']}
						my={6}
						color={isDarkMode ? 'teal.300' : 'teal.500'}>
						Data Retention
					</Heading>
					<Text mb={6}>
						We retain personal information for as long as necessary to fulfill
						the purposes outlined in this Privacy Policy unless a longer
						retention period is required or permitted by law.
					</Text>

					<Heading
						as='h2'
						fontSize={['xl', '2xl']}
						my={6}
						color={isDarkMode ? 'teal.300' : 'teal.500'}>
						Third-Party Services
					</Heading>
					<Text mb={6}>
						The Ground Water Survey Center may use third-party services, such as
						analytics tools, that collect, monitor, and analyze information to
						improve our services. These third-party service providers have their
						own privacy policies addressing how they use such information.
					</Text>

					<Heading
						as='h2'
						fontSize={['xl', '2xl']}
						my={6}
						color={isDarkMode ? 'teal.300' : 'teal.500'}>
						Cookies
					</Heading>
					<Text mb={6}>
						The Ground Water Survey Center uses cookies and similar tracking
						technologies to enhance your experience on our website. You can
						instruct your browser to refuse all cookies or to indicate when a
						cookie is being sent.
					</Text>

					<Heading
						as='h2'
						fontSize={['xl', '2xl']}
						my={6}
						color={isDarkMode ? 'teal.300' : 'teal.500'}>
						Changes to This Privacy Policy
					</Heading>
					<Text mb={6}>
						The Ground Water Survey Center may update this Privacy Policy from
						time to time. We will notify you of any changes by posting the new
						policy on this page.
					</Text>

					<Heading
						as='h2'
						fontSize={['xl', '2xl']}
						my={6}
						color={isDarkMode ? 'teal.300' : 'teal.500'}>
						Contact Us
					</Heading>
					<Text mb={2}>
						If you have any questions or suggestions about this Privacy Policy,
						please contact us at:
					</Text>
					<Text>
						<a href='tel:+919753259259'>+91 9753259259</a>,
						<a href='tel:+919425180023'>+91 9425180023</a>
						<br />
						Address: Gali Number 3, Siddhart Nagar, Satna, Madhya Pradesh 485001
						<br />
						<a href='mailto:BhujalSarvekshanKednra@gmail.com'>
							BhujalSarvekshanKendra@gmail.com
						</a>
					</Text>
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
				</Box>
			</Box>
		</>
	);
};

export default PrivacyPolicy;
