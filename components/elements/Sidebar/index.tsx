import { Logo } from '@components/assets/';
import { Profile } from '@components/elements';
import NavItem from './NavItem';

import {
  HomeIcon,
  MapIcon,
  LightBulbIcon,
  CollectionIcon,
  CogIcon,
  LoginIcon,
} from '@heroicons/react/outline';

import { useUser } from '@context/user';

export const Sidebar = () => {
  const { user } = useUser();

  return (
    <nav className='flex flex-col items-center justify-between w-56 h-screen py-[5vh] border-r transition-all border-gray-900 dark:border-gray-50 sticky top-0 z-20'>
      <Logo className='text-3xl' />

      <ul className='flex flex-col items-center w-full space-y-16'>
        <NavItem name='Home' url='/home'>
          <HomeIcon className='h-8' />
        </NavItem>
        <NavItem name='Courses' url='/courses'>
          <MapIcon className='h-8' />
        </NavItem>
        <NavItem name='Instructors' url='/instructors'>
          <LightBulbIcon className='h-8' />
        </NavItem>
        <NavItem name='Resources' url='/resources'>
          <CollectionIcon className='h-8' />
        </NavItem>
        {user ? (
          <NavItem name='Settings' url='/settings'>
            <CogIcon className='h-8' />
          </NavItem>
        ) : (
          <NavItem name='Login' url='/login'>
            <LoginIcon className='h-8' />
          </NavItem>
        )}
      </ul>

      <Profile />
    </nav>
  );
};
