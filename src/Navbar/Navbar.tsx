/** @format */

import { ReactNode } from 'react';
import {
	Box,
	Flex,
	Avatar,
	Link,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
	IconButton,
	HStack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
	<Link
		px={2}
		py={1}
		rounded={'md'}
		_hover={{
			textDecoration: 'none',
			bg: useColorModeValue('gray.200', 'gray.700'),
		}}
		href={'#'}>
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
						<Button onClick={toggleColorMode}>
							{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
						</Button>
						<HStack
							as={'nav'}
							spacing={4}
							display={{ base: 'none', md: 'flex' }}>
							{Links.map((link) => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</HStack>
					</HStack>
					<Stack
						direction={'row'}
						flex={{ base: 2, md: 0 }}
						justify={'flex-end'}
						spacing={15}></Stack>

					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={7}>
							<Menu>
								<MenuButton
									as={Button}
									rounded={'full'}
									variant={'link'}
									cursor={'pointer'}
									minW={0}>
									<Avatar
										size={'sm'}
										src={'https://avatars.dicebear.com/api/male/username.svg'}
									/>
								</MenuButton>
								<MenuList alignItems={'center'}>
									<br />
									<Center>
										<Avatar
											size={'3xl'}
											src={'https://avatars.dicebear.com/api/male/username.svg'}
										/>
									</Center>
									<br />
									<Center>
										<p>Shivanshu Pathak</p>
									</Center>
									<br />
									<MenuDivider />
									<MenuItem>Your Reports</MenuItem>
									<MenuItem>Profile</MenuItem>
								</MenuList>
							</Menu>
							<Button>Log Out</Button>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}
