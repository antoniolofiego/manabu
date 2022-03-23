import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaSpinner } from 'react-icons/fa';

interface ILoadedNav {
  name: string;
  url: string;
  loading?: never;
}

interface ILoadingNav {
  name?: never;
  url?: never;
  loading: boolean;
}

export const NavItem: React.FC<ILoadedNav | ILoadingNav> = ({
  name = '',
  url = '',
  loading,
  children,
}) => {
  const router = useRouter();

  if (loading)
    return (
      <div className='w-full'>
        <span className='flex items-center space-x-4 pl-14'>
          <FaSpinner className='h-8 animate-spin' />
          <span className='w-20 h-4 bg-gray-800 animate-pulse rounded-xl' />
        </span>
      </div>
    );

  const pageIsActive = (page: string): boolean => {
    return router.asPath.split('/')[1] === page.split('/')[1];
  };

  const inactiveStyles =
    'transition-all origin-left scale-0 group-hover:scale-100 duration-200';

  return (
    <Link href={url}>
      <a className='relative w-full group active:translate-y-px'>
        <span
          className={`absolute -left-1 w-3 h-full bg-gray-900 dark:bg-gray-50 rounded-r-lg ${
            pageIsActive(url) ? 'group-hover:translate-x-px ' : inactiveStyles
          }`}
        />

        <span
          className={`flex items-center pl-12 space-x-4 ${
            pageIsActive(url)
              ? 'dark:text-gray-200'
              : 'active:translate-px dark:group-hover:text-gray-200 group-hover:text-gray-800'
          }`}
        >
          {children}
          <span>{name || 'Home'}</span>
        </span>
      </a>
    </Link>
  );
};
