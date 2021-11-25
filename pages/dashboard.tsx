import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Dashboard: React.FC = () => {
	const [loggedIn, setloggedIn] = useState(true);
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Dashboard | learntocloud.guide</title>
				<meta
					name='description'
					content='Generated with the Batteries Included Next App template'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>Dashboard</h1>
			<div>
				<h2>Test</h2>
			</div>
		</>
	);
};

export default Dashboard;
