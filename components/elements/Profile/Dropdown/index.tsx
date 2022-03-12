import { Menu } from '@headlessui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useUser } from '@context/user';

interface LinkTagProps {
  href: string;
  children: React.ReactNode;
  className: string;
  rest?: any;
}

const LinkTag: React.FC<LinkTagProps> = (props) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

const Dropdown: React.FC = ({ children }) => {
  const router = useRouter();

  const { user, logout } = useUser();

  const signOut = () => {
    logout();
    router.push('/');
  };

  return (
    <>
      {user && (
        <Menu as='div' className='relative flex flex-col text-left'>
          <Menu.Items
            as='ul'
            className='absolute left-0 w-56 mt-2 origin-top-right border border-gray-900 divide-y divide-gray-900 rounded-md shadow-lg dark:divide-gray-50 bg-gray-50 dark:bg-gray-900 -top-48 ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-gray-50'
          >
            <div className='p-1'>
              <Menu.Item>
                {({ active }) => (
                  <LinkTag
                    className={`${
                      active && ' bg-gray-300 dark:bg-gray-800'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    href='/account-settings'
                  >
                    Your Profile
                  </LinkTag>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <LinkTag
                    className={`${
                      active && 'bg-gray-300 dark:bg-gray-800'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    href='/account-settings'
                  >
                    Documentation
                  </LinkTag>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <LinkTag
                    className={`${
                      active && 'bg-gray-300 dark:bg-gray-800'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    href='/account-settings'
                  >
                    Documentation
                  </LinkTag>
                )}
              </Menu.Item>
            </div>
            <div className='p-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active && 'bg-gray-300 dark:bg-gray-800'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={signOut}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
          <Menu.Button>{children}</Menu.Button>
        </Menu>
      )}
    </>
  );
};

export default Dropdown;
