import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSupabase } from '@utils/supabase';

const Home: React.FC = () => {
	const { session } = useSupabase();
	const router = useRouter();

	useEffect(() => {
		if (!!session) {
			router.push('/home');
		}

		if (!session) {
			router.push('/login');
		}
	}, [router, session]);

	return <></>;
};

export default Home;
