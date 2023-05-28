/* @format */

import { ChakraProvider } from '@chakra-ui/react';
import { type AppType } from 'next/dist/shared/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
	return (
		<ClerkProvider
			frontendApi={process.env.exampleNEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
			<ChakraProvider>
				<Component {...pageProps} />;
			</ChakraProvider>
		</ClerkProvider>
	);
};

export default MyApp;
