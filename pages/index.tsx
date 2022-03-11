import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@context/user';

const Home: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!!user) {
      router.push('/home');
    }

    if (!user) {
      router.push('/login');
    }
  }, [router, user]);

  return <></>;
};

export default Home;
