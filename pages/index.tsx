import { useEffect } from 'react';
import { useRouter } from 'next/router';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return <></>;
};

export default Home;
