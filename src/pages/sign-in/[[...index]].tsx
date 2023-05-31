/** @format */

// import { HStack, Center } from '@chakra-ui/react';
// import { SignIn } from '@clerk/nextjs';
// import router, { useRouter } from 'next/router';
// export default function Page() {
// 	return (
// 		<Center>
// 			<SignIn />
// 		</Center>
// 	);
// }
import { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useRouter } from 'next/router';
import Dashboard from '../dashboard';
import { SignIn } from '@clerk/nextjs';
import { Center } from '@chakra-ui/react';

const LoginPage = () => {
	const { isSignedIn } = useUser();

	const router = useRouter();

	useEffect(() => {
		// Redirect to the dashboard if the user is signed in
		if (isSignedIn) {
			router.push('/dashboard');
		}
	}, [isSignedIn, router]);

	return (
		<Center>
			<SignIn />
		</Center>
	);
};

export default LoginPage;
