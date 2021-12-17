import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSupabase } from '@utils/supabase';

function useUnauthenticatedPush(authState = false): boolean | void {
	const [loggedIn, setLoggedIn] = useState(false);

	const router = useRouter();
	const { session } = useSupabase();
	useEffect(() => {
		if (session === null) {
			router.push('/login');
		}
		if (authState) {
			setLoggedIn(true);
		}
	}, [authState, router, session]);

	if (!authState) {
		return;
	}

	return loggedIn;
}

export default useUnauthenticatedPush;
