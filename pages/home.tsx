import { ProgressGroup, CardGroup, Layout } from '@components/sections';
import Head from 'next/head';

import type { NextPage } from 'next';

import { useUser } from '@context/user';
import React from 'react';

const Home: NextPage = () => {
  const { user } = useUser();
  let username: string;

  switch (user?.app_metadata.provider) {
    case 'discord':
      username = user?.user_metadata.full_name;
      break;
    case 'github':
      username = user?.user_metadata.user_name;
    default:
      username = 'friend';
      break;
  }

  return (
    <>
      <Head>
        <title>Home | manabu</title>
        <meta
          name='description'
          content='manabu is a community-based learning platform, where all courses are free and open source.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <>
          <div className='mx-auto space-y-12'>
            <h2 className=''>Hello, {username}</h2>
            <ProgressGroup />
            <CardGroup />
          </div>
        </>
      </Layout>
    </>
  );
};

export default Home;
