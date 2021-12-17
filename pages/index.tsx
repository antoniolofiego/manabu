import { useState } from 'react';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
	const [loggedIn] = useState(false);
	const router = useRouter();

	if (loggedIn) {
		router.push('/dashboard');
	}

	if (!loggedIn) {
		router.push('/login');
	}

	return <></>;
};

export default Home;
