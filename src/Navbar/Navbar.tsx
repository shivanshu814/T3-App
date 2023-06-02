/** @format */

import { ReactNode } from 'react';
import {
	Box,
	Flex,
	Link,
	Button,
	useColorModeValue,
	Stack,
	useColorMode,
	HStack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { UserButton } from '@clerk/nextjs';
import { Logo } from '~/pages/logo';

const Links = [
	{ label: 'Projects', url: '/projects' },
	{ label: 'Reports', url: '/reports' },
	{ label: 'Application Form', url: '/formpage' },
];

const NavLink = ({ children, url }: { children: ReactNode; url: string }) => (
	<Link
		px={2}
		py={1}
		rounded={'md'}
		_hover={{
			textDecoration: 'none',
			bg: useColorModeValue('gray.200', 'gray.700'),
		}}
		href={url}>
		{children}
	</Link>
);

export default function Nav() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<HStack spacing={8} alignItems={'center'}>
						{/* <Box>Logo</Box> */}
						<Logo />
						<Button onClick={toggleColorMode}>
							{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
						</Button>
						<HStack
							as={'nav'}
							spacing={4}
							display={{ base: 'none', md: 'flex' }}>
							{Links.map((link) => (
								<NavLink key={link.label} url={link.url}>
									{link.label}
								</NavLink>
							))}
						</HStack>
					</HStack>
					<Stack
						direction={'row'}
						flex={{ base: 2, md: 0 }}
						justify={'flex-end'}
						spacing={6}></Stack>
					<UserButton />
				</Flex>
			</Box>
		</>
	);
}
