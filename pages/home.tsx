import { useState } from 'react';

import Phase from '@components/Phase';
import SearchBar from '@components/shared/SearchBar';
import Layout from '@components/Layout';

import Head from 'next/head';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
	const [loggedIn, setloggedIn] = useState(true);
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Home | learntocloud.guide</title>
				<meta
					name='description'
					content='Generated with the Batteries Included Next App template'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<div className='grid items-center px-12 mx-auto space-y-16 max-w-7xl'>
					<SearchBar />
					<h2 className='text-2xl font-extrabold justify-self-center lg:justify-self-start'>
						Hello, Katherine
					</h2>
					<div className='grid w-full gap-12 mx-auto lg:mx-0 lg:max-w-full lg:grid-cols-2 lg:grid-rows-2'>
						<Phase
							number={1}
							name='Linux & networking'
							stage='3. Introduction to Networking'
							progress={0.5}
							url='intro-to-networking'
						/>
						<Phase
							number={2}
							name='Programming & Scripting'
							stage='2. Automation with Python'
							progress={0.33}
							url='automation-with-python'
						/>
						<Phase
							number={3}
							name='Cloud Platforms'
							stage='1. Cloud Service Providers'
							progress={0.0}
							url='cloud-service-providers'
						/>
						<Phase
							number={4}
							name='DevOps Fundamentals'
							stage='1. DevOps concepts'
							progress={0.0}
							url='devops-concepts'
						/>
					</div>
					<h2 className='text-2xl font-extrabold'>
						Looking for something to do?
					</h2>
				</div>
			</Layout>
		</>
	);
};

export default Home;
