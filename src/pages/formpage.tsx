/** @format */

/** @format */

import { useEffect, useState } from 'react';
import {
	Flex,
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Select,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FormPage = () => {
	const backgroundImage = {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: -1,
	};
	const colors = [
		'red.400',
		'orange.400',
		'yellow.400',
		'green.400',
		'teal.400',
		'blue.400',
		'purple.400',
		'pink.400',
	];

	const animations = [
		{ scale: [1, 1.2, 1] },
		{ rotate: [0, 360] },
		{ y: [-50, 0] },
		{ x: [-50, 0] },
		{ scale: [0, 1] },
	];

	const randomColor = () => {
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	};

	const [bgColor, setBgColor] = useState(randomColor());

	const randomAnimation = () => {
		const randomIndex = Math.floor(Math.random() * animations.length);
		return animations[randomIndex];
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setBgColor(randomColor());
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [pincode, setPincode] = useState('');
	const [state, setState] = useState('');
	const [district, setDistrict] = useState('');
	const [phone, setPhone] = useState('');
	const [fatherName, setFatherName] = useState('');
	const [village, setVillage] = useState('');
	const [language, setLanguage] = useState('en');

	const handleLanguageSwitch = () => {
		setLanguage(language === 'en' ? 'hi' : 'en');
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log('Form submitted!');
	};

	return (
		<>
			<Flex align='center' justify='center' minHeight='100vh'>
				<Box
					maxW='md'
					p={4}
					borderWidth={1}
					borderRadius='md'
					boxShadow='md'
					minWidth='100vh'>
					<Image
						src='/anim.gif' // Replace with the actual path to your image
						alt='Background Image'
						layout='fill'
						objectFit='cover'
						quality={100}
					/>
					<Flex justify='space-between' mb={4}>
						<Heading size='lg'>Registation Form</Heading>
						<Button onClick={handleLanguageSwitch}>
							{language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
						</Button>
					</Flex>
					<form onSubmit={handleSubmit}>
						<FormControl id='name' mb={4}>
							<FormLabel>{language === 'en' ? 'Name' : 'नाम'}</FormLabel>
							<Input
								type='text'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</FormControl>
						<FormControl id='address' mb={4}>
							<FormLabel>{language === 'en' ? 'Address' : 'पता'}</FormLabel>
							<Input
								type='text'
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
						</FormControl>
						<FormControl id='pincode' mb={4}>
							<FormLabel>{language === 'en' ? 'Pincode' : 'पिनकोड'}</FormLabel>
							<Input
								type='text'
								value={pincode}
								onChange={(e) => setPincode(e.target.value)}
							/>
						</FormControl>
						<FormControl id='state' mb={4}>
							<FormLabel>{language === 'en' ? 'State' : 'राज्य'}</FormLabel>
							<Input
								type='text'
								value={state}
								onChange={(e) => setState(e.target.value)}
							/>
						</FormControl>
						<FormControl id='district' mb={4}>
							<FormLabel>{language === 'en' ? 'District' : 'जिला'}</FormLabel>
							<Input
								type='text'
								value={district}
								onChange={(e) => setDistrict(e.target.value)}
							/>
						</FormControl>
						<FormControl id='phone' mb={4}>
							<FormLabel>{language === 'en' ? 'Phone' : 'फ़ोन'}</FormLabel>
							<Input
								type='text'
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</FormControl>
						<FormControl id='fatherName' mb={4}>
							<FormLabel>
								{language === 'en' ? "Father's Name" : 'पिता का नाम'}
							</FormLabel>
							<Input
								type='text'
								value={fatherName}
								onChange={(e) => setFatherName(e.target.value)}
							/>
						</FormControl>
						<FormControl id='village' mb={4}>
							<FormLabel>{language === 'en' ? 'Village' : 'गांव'}</FormLabel>
							<Input
								type='text'
								value={village}
								onChange={(e) => setVillage(e.target.value)}
							/>
						</FormControl>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							key={Math.random()}>
							<Button
								bgGradient={`linear(to-r, ${bgColor}, ${randomColor()})`}
								color='white'
								fontWeight='bold'
								borderRadius='full'
								p={8}
								fontSize='xl'
								_hover={{ boxShadow: 'lg' }}
								_active={{ transform: 'scale(0.95)' }}
								type='submit'
								colorScheme='teal'
								mt={4}
								w='100%'
								borderTopRadius='md'>
								{language === 'en' ? 'Submit' : 'जमा करें'}
							</Button>
						</motion.div>
					</form>
				</Box>
			</Flex>
		</>
	);
};

export default FormPage;
