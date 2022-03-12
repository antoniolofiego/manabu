import { Logo } from '@components/assets';
import { ThemeSwitcherButton } from '@components/elements';
import { SocialLogin } from '@components/sections';
import Head from 'next/head';
import Link from 'next/link';

import { HomeIcon } from '@heroicons/react/outline';

import { useUser } from '@context/user';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import type { NextPage } from 'next';

const Login: NextPage = () => {
  const router = useRouter();
  const { user } = useUser();

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
        <div className='absolute top-0 left-0 p-12'>
          <Link href='/home'>
            <a className='flex items-center space-x-4'>
              <HomeIcon className='h-8 transition dark:hover:text-gray-400 hover:text-gray-800' />
            </a>
          </Link>
        </div>

        <Logo className='text-4xl text-gray-900 dark:text-gray-50' />
        <SocialLogin />
        <div className='absolute bottom-0 right-0 p-12'>
          <ThemeSwitcherButton height={'h-8'} />
        </div>
      </div>
    </>
  );
};

export default Login;
