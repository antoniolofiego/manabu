import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (loggedIn) {
			router.push('/dashboard');
		}
	}, [loggedIn, router]);

	return (
		<>
			<Head>
				<title>learntocloud.guide</title>
				<meta
					name='description'
					content='Generated with the Batteries Included Next App template'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='flex-1 min-w-0 px-2 overflow-auto bg-indigo-50'>
				{!loggedIn && (
					<div>
						<button onClick={() => setLoggedIn(true)}>logIn</button>
					</div>
				)}
			</main>
		</>
	);
};

export default Home;
