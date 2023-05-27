/* @format */

import { ChakraProvider } from '@chakra-ui/react';
import { type AppType } from 'next/dist/shared/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider>
			<ClerkProvider {...pageProps}>
				<Component {...pageProps} />;
			</ClerkProvider>
		</ChakraProvider>
	);
};

export default MyApp;
