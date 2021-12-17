import { useState } from 'react';
import { useRouter } from 'next/router';

const useUnauthenticatedPush = () => {
	// TODO: replace fixed state with Supabase session
	const [loggedIn] = useState(true);
	const router = useRouter();

	if (!loggedIn) {
		router.push('/login');
	}
};

export default useUnauthenticatedPush;
