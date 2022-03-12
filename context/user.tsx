import { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '@utils/supabase';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import axios from 'axios';

type ContextType = {
  user: User | null;
  loginEmail: (email: string) => void;
  loginDiscord: () => void;
  loginGithub: () => void;
  logout: () => void;
  isLoading: boolean;
};

const Context = createContext<ContextType>({
  user: null,
  loginEmail: () => {},
  loginDiscord: () => {},
  loginGithub: () => {},
  logout: () => {},
  isLoading: false,
});

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(supabase.auth.user());
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      const sessionUser = supabase.auth.user();

      if (sessionUser) {
        const { data: profile } = await supabase
          .from('profile')
          .select('*')
          .eq('id', sessionUser.id)
          .single();

        setUser({
          ...sessionUser,
          ...profile,
        });
      }
      setIsLoading(false);
    };

    getUserProfile();

    supabase.auth.onAuthStateChange(() => {
      getUserProfile();
    });
  }, []);

  useEffect(() => {
    axios.post('/api/set-supabase-cookie', {
      event: user ? 'SIGNED_IN' : 'SIGNED_OUT',
      session: supabase.auth.session(),
    });
  }, [user]);

  useEffect(() => {
    if (user) {
      const subscription = supabase
        .from(`profile:id=eq.${user.id}`)
        .on('UPDATE', (payload) => {
          setUser({ ...user, ...payload.new });
        })
        .subscribe();

      return () => {
        supabase.removeSubscription(subscription);
      };
    }
  }, [user]);

  const loginEmail = async (email: string) => {
    await supabase.auth.signIn({
      email: email,
    });
  };

  const loginDiscord = async () => {
    await supabase.auth.signIn({
      provider: 'discord',
    });
  };

  const loginGithub = async () => {
    await supabase.auth.signIn({
      provider: 'github',
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/');
  };

  const exposed = {
    user,
    loginEmail,
    loginDiscord,
    loginGithub,
    logout,
    isLoading,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useUser = () => {
  return useContext(Context);
};

export default UserProvider;
