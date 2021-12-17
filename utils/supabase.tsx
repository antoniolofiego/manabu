import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL as string,
	process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string
);

export const useSupabase = () => {
	const [session, setSession] = useState(supabase.auth.session());

	supabase.auth.onAuthStateChange((_event, session) => {
		setSession(session);
	});

	return { session, supabase };
};
