import { useRouter } from 'next/router';
import useSupabase from '@hooks/useSupabase';

const useUnauthenticatedPush = () => {
	const { session } = useSupabase();
	const router = useRouter();

	if (!session) {
		router.push('/login');
	}
};

export default useUnauthenticatedPush;
