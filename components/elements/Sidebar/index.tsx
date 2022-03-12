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
  const { user, isLoading } = useUser();

  return (
    <nav className='sticky top-0 z-20 flex flex-col items-center justify-center w-56 h-screen transition-all border-r border-gray-900 dark:border-gray-50'>
      <div className='flex items-center h-1/4'>
        <Logo className='text-3xl' />
      </div>

      <ul className='flex flex-col items-center justify-center w-full space-y-16 h-1/2'>
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
        {isLoading ? (
          <NavItem loading />
        ) : user ? (
          <NavItem name='Settings' url='/settings'>
            <CogIcon className='h-8' />
          </NavItem>
        ) : (
          <NavItem name='Login' url='/login'>
            <LoginIcon className='h-8' />
          </NavItem>
        )}
      </ul>

      <div className='flex items-center h-1/4'>
        <Profile />
      </div>
    </nav>
  );
};
