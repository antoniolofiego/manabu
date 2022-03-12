import PhaseGroup from '@components/sections/PhaseGroup';
import SearchBar from '@components/shared/SearchBar';
import Layout from '@components/Layout';
import Head from 'next/head';

import { useUser } from '@context/user';

const Home: React.FC = () => {
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
          content='Generated with the Batteries Included Next App template'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <>
          <SearchBar />
          <div className='grid items-center px-12 mx-auto space-y-16 max-w-7xl'>
            <h2 className='text-2xl font-extrabold '>Hello, {username}</h2>
            <PhaseGroup />
            <h2 className='text-2xl font-extrabold'>
              Looking for something to do?
            </h2>
          </div>
        </>
      </Layout>
    </>
  );
};

export default Home;
