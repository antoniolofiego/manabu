import { ProgressGroup, CardGroup, Layout } from '@components/sections';
import Head from 'next/head';

import type { NextPage } from 'next';

import { useUser } from '@context/user';
import React from 'react';

const Home: NextPage = () => {
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
            <ProgressGroup />
            <CardGroup />
          </div>
        </>
      </Layout>
    </>
  );
};

export default Home;
