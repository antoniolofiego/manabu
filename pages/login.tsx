import { useEffect } from 'react';

import Logo from '@components/Assets/Logo';
import ThemeSwitcherButton from '@components/shared/ThemeSwitcherButton';
import Head from 'next/head';

import { BsGithub, BsDiscord } from 'react-icons/bs';

import { supabase } from '@utils/supabase';
import { useRouter } from 'next/router';

const Login = () => {
	const router = useRouter();

	useEffect(() => {
		const user = supabase.auth.user() || null;

		if (!!user) {
			router.push('/home');
		}
	}, [router]);

	const loginWithGithub = () =>
		supabase.auth.signIn(
			{
				provider: 'github',
			},
			{
				redirectTo: 'http://localhost:3000/home',
			}
		);

	const loginWithDiscord = () =>
		supabase.auth.signIn(
			{
				provider: 'discord',
			},
			{
				redirectTo: 'http://localhost:3000/home',
			}
		);

	if (false) {
		router.push('/home');
	}

	return (
		<>
			<Head>
				<title>Login | LearnToCloud</title>
			</Head>
			<div className='relative flex flex-col items-center justify-center h-screen min-w-0 space-y-8 bg-gray-50 dark:bg-gray-900'>
				<Logo className='text-gray-900 dark:text-gray-50' />
				<div className='flex flex-col space-y-6'>
					<button
						onClick={loginWithGithub}
						className='flex items-center px-5 py-3 space-x-8 bg-gray-900 shadow-lg rounded-xl shadow-gray-900/30 dark:bg-gray-50 dark:shadow-gray-50/30 hover:bg-gray-700 dark:hover:bg-gray-200'
					>
						<BsGithub size={32} className='text-gray-50 dark:text-gray-900' />
						<span className='text-gray-50 dark:text-gray-900'>
							Sign in with GitHub
						</span>
					</button>
					<button
						onClick={loginWithDiscord}
						className='flex items-center px-5 py-3 space-x-8 bg-gray-900 shadow-lg rounded-xl shadow-gray-900/30 dark:bg-gray-50 dark:shadow-gray-50/30 hover:bg-gray-700 dark:hover:bg-gray-200'
					>
						<BsDiscord size={32} className='text-gray-50 dark:text-gray-900' />
						<span className='text-gray-50 dark:text-gray-900'>
							Sign in with Discord
						</span>
					</button>
				</div>
				<div className='absolute bottom-0 right-0 p-12'>
					<ThemeSwitcherButton height={'h-8'} />
				</div>
			</div>
		</>
	);
};

export default Login;
