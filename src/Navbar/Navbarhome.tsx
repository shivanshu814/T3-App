/** @format */

// /** @format */

// import { ReactNode } from 'react';
// import {
// 	Box,
// 	Flex,
// 	Link,
// 	Button,
// 	useDisclosure,
// 	useColorModeValue,
// 	Stack,
// 	useColorMode,
// 	IconButton,
// 	HStack,
// 	Collapse,
// 	ButtonGroup,
// } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
// import { Logo } from '~/pages/logo';

// const Links = [
// 	{ label: 'Dashboard', url: '/dashboard' },
// 	{ label: 'Projects', url: '/projects' },
// 	{ label: 'Application Form', url: '/formpage' },
// ];

// const NavLink = ({ children, url }: { children: ReactNode; url: string }) => (
// 	<Link
// 		px={2}
// 		py={1}
// 		rounded={'md'}
// 		_hover={{
// 			textDecoration: 'none',
// 			bg: useColorModeValue('gray.200', 'gray.700'),
// 		}}
// 		href={url}>
// 		{children}
// 	</Link>
// );

// export default function Nav() {
// 	const { colorMode, toggleColorMode } = useColorMode();
// 	const { isOpen, onToggle } = useDisclosure();
// 	return (
// 		<>
// 			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
// 				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
// 					{/* <IconButton
// 						size={'md'}
// 						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
// 						aria-label={'Open Menu'}
// 						display={{ md: 'none' }}
// 						onClick={isOpen ? onClose : onOpen}>
// 						<div>
// 							<Link href='/dashboard'>Dashboard</Link>
// 							<Link href='/project'>Projects</Link>
// 							<Link href='/formpage'>Application Form</Link>
// 						</div>
// 					</IconButton> */}
// 					<IconButton
// 						onClick={onToggle}
// 						icon={
// 							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
// 						}
// 						variant={'ghost'}
// 						aria-label={'Toggle Navigation'}
// 					/>
// 					<HStack spacing={8} alignItems={'center'}>
// 						{/* <Box>Logo</Box> */}
// 						<Logo />
// <Button onClick={toggleColorMode}>
// 	{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
// </Button>
// 						<HStack
// 							as={'nav'}
// 							spacing={4}
// 							display={{ base: 'none', md: 'flex' }}>
// 							{Links.map((link) => (
// 								<NavLink key={link.label} url={link.url}>
// 									{link.label}
// 								</NavLink>
// 							))}
// 						</HStack>
// 					</HStack>
// 					<Stack
// 						direction={'row'}
// 						flex={{ base: 2, md: 0 }}
// 						justify={'flex-end'}
// 						spacing={6}></Stack>

// 					<Flex alignItems={'center'}>
// 						<Stack direction={'row'} spacing={7}></Stack>
// 					</Flex>
// 				</Flex>
// 			</Box>
// 		</>
// 	);
// }

import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	useColorMode,
	HStack,
} from '@chakra-ui/react';
import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from '@chakra-ui/icons';
import { Logo } from '~/pages/logo';

export default function WithSubnavigation() {
	const { isOpen, onToggle } = useDisclosure();

	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box>
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}>
				<Flex
					flex={{ base: 1, md: 'auto' }}
					ml={{ base: -2 }}
					display={{ base: 'flex', md: 'none' }}>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
				<Logo />
				<Button onClick={toggleColorMode}>
					{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
				</Button>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}

const DesktopNav = () => {
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkHoverColor = useColorModeValue('gray.800', 'white');
	const popoverContentBgColor = useColorModeValue('white', 'gray.800');

	return (
		<Stack direction={'row'} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={'hover'} placement={'bottom-start'}>
						<PopoverTrigger>
							<Link
								p={2}
								href={navItem.href ?? '#'}
								fontSize={'lg'}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: 'none',
									color: linkHoverColor,
								}}>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={'xl'}
								bg={popoverContentBgColor}
								p={4}
								rounded={'xl'}
								minW={'sm'}>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
	return (
		<Link
			href={href}
			role={'group'}
			display={'block'}
			p={2}
			rounded={'md'}
			_hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
			<Stack direction={'row'} align={'center'}>
				<Box>
					<Text
						transition={'all .3s ease'}
						_groupHover={{ color: 'pink.400' }}
						fontWeight={500}>
						{label}
					</Text>
					<Text fontSize={'sm'}>{subLabel}</Text>
				</Box>
				<Flex
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
					justify={'flex-end'}
					align={'center'}
					flex={1}>
					<Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	);
};

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue('white', 'gray.800')}
			p={4}
			display={{ md: 'none' }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? '#'}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none',
				}}>
				<Text
					fontWeight={600}
					color={useColorModeValue('gray.600', 'gray.200')}>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={'all .25s ease-in-out'}
						transform={isOpen ? 'rotate(180deg)' : ''}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={'solid'}
					borderColor={useColorModeValue('gray.200', 'gray.700')}
					align={'start'}>
					{children &&
						children.map((child) => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

interface NavItem {
	label: string;
	subLabel?: string;
	children?: Array<NavItem>;
	href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
	// {
	// 	label: 'Dashboard',
	// 	children: [
	// 		{
	// 			label: 'Explore Design Work',
	// 			subLabel: 'Trending Design to inspire you',
	// 			href: '/dashboard',
	// 		},
	// 		{
	// 			label: 'New & Noteworthy',
	// 			subLabel: 'Up-and-coming Designers',
	// 			href: '#',
	// 		},
	// 	],
	// },
	// {
	// 	label: 'Find Work',
	// 	children: [
	// 		{
	// 			label: 'Job Board',
	// 			subLabel: 'Find your dream design job',
	// 			href: '#',
	// 		},
	// 		{
	// 			label: 'Freelance Projects',
	// 			subLabel: 'An exclusive list for contract work',
	// 			href: '#',
	// 		},
	// 	],
	// },
	{
		label: 'Dashboard',
		href: '/dashboard',
	},
	{
		label: 'Application Form',
		href: '/formpage',
	},
];
