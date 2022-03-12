import { BsGithub, BsDiscord } from 'react-icons/bs';
import { useUser } from '@context/user';

import type { IconType } from 'react-icons';

interface SocialLoginProps {
  provider: string;
}

type Provider = {
  [idx: string]: {
    icon: IconType;
    strategy: () => void;
  };
};

export const SocialLoginButton: React.FC<SocialLoginProps> = ({ provider }) => {
  const { loginDiscord, loginGithub } = useUser();

  const Providers: Provider = {
    discord: {
      icon: BsDiscord,
      strategy: loginDiscord,
    },
    github: {
      icon: BsGithub,
      strategy: loginGithub,
    },
  };

  const Icon = Providers[provider.toLowerCase()].icon;

  return (
    <button
      onClick={Providers[provider.toLowerCase()].strategy}
      className='flex items-center px-5 py-3 space-x-8 bg-gray-900 shadow-lg rounded-xl shadow-gray-900/30 dark:bg-gray-50 dark:shadow-gray-50/30 hover:bg-gray-700 dark:hover:bg-gray-200'
    >
      <Icon size={32} className='text-gray-50 dark:text-gray-900' />
      <span className='text-gray-50 dark:text-gray-900'>
        Log in with {provider}
      </span>
    </button>
  );
};
