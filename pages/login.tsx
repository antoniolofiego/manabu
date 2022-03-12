import { Logo } from '@components/assets/';
import { ThemeSwitcherButton } from '@components/shared/';
import Head from 'next/head';

import { BsGithub, BsDiscord } from 'react-icons/bs';

import { useUser } from '@context/user';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import type { NextPage } from 'next';

const Login: NextPage = () => {
  const router = useRouter();
  const { user, loginGithub, loginDiscord } = useUser();

  useEffect(() => {
    if (user) {
      router.push('/home');
    }
  }, [router, user]);

  return (
    <>
      <Head>
        <title>Login | manabu</title>
      </Head>
      <div className='relative flex flex-col items-center justify-center h-screen min-w-0 space-y-8 bg-gray-50 dark:bg-gray-900'>
        <Logo className='text-4xl text-gray-900 dark:text-gray-50' />
        <div className='flex flex-col space-y-6'>
          <button
            onClick={loginGithub}
            className='flex items-center px-5 py-3 space-x-8 bg-gray-900 shadow-lg rounded-xl shadow-gray-900/30 dark:bg-gray-50 dark:shadow-gray-50/30 hover:bg-gray-700 dark:hover:bg-gray-200'
          >
            <BsGithub size={32} className='text-gray-50 dark:text-gray-900' />
            <span className='text-gray-50 dark:text-gray-900'>
              Sign in with GitHub
            </span>
          </button>
          <button
            onClick={loginDiscord}
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
