import { useState, useEffect } from 'react';
import { Logo } from '@components/assets';
import { UserProfile, NavItem } from '@components/elements';

import {
  HomeIcon,
  MapIcon,
  LightBulbIcon,
  CogIcon,
  LoginIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';

import { useUser } from '@context/user';
import useCallbackOnClickOutside from '../../../hooks/useCallbackOnClickOutside';

export const Sidebar = () => {
  const { user, isLoading } = useUser();
  const [isShowing, setIsShowing] = useState(false);

  useCallbackOnClickOutside('#sidebar', () => setIsShowing(false));

  return (
    <div id='sidebar'>
      {!isShowing && (
        <button
          onClick={() => setIsShowing(!isShowing)}
          className='absolute top-4 left-4 md:hidden'
        >
          <MenuIcon className='z-40 h-8 cursor-pointer' />
        </button>
      )}
      <nav
        className={` top-0 z-[120] flex-col items-center justify-center md:w-56 h-screen border-r border-gray-900 md:flex dark:border-gray-50 transition dark:bg-gray-900 bg-gray-50 ${
          isShowing
            ? 'absolute flex translate-x-0 w-56'
            : '-translate-x-56 md:translate-x-0 w-0 sticky'
        }`}
      >
        <div className='relative flex justify-center w-full text-center h-1/4'>
          {isShowing && (
            <button
              onClick={() => setIsShowing(!isShowing)}
              className='absolute top-2 right-2 md:hidden'
            >
              <XIcon className='z-40 h-8 cursor-pointer' />
            </button>
          )}
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
          <UserProfile />
        </div>
      </nav>
    </div>
  );
};
