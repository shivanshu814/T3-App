/** @format */

import { Box, Spinner } from '@chakra-ui/react';

function LoadingPage() {
	return (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='center'
			height='100vh'>
			<Spinner
				size='xl'
				thickness='4px'
				speed='0.65s'
				emptyColor='gray.200'
				color='blue.500'
			/>
		</Box>
	);
}

export default LoadingPage;
