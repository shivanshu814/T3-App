/** @format */

import { ReactNode } from 'react';
import {
	Box,
	Flex,
	Link,
	Button,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	IconButton,
	HStack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Logo } from '~/pages/logo';

const Links = [
	{ label: 'Dashboard', url: '/dashboard' },
	{ label: 'Projects', url: '/projects' },
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
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<IconButton
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={{ md: 'none' }}
						onClick={isOpen ? onClose : onOpen}
					/>
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

					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={7}></Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}
