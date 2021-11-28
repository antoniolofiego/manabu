import Logo from '@components/Assets/Logo';
import Profile from '@components/shared/Profile';
import ThemeSwitcherButton from '@components/shared/ThemeSwitcherButton';
import NavItem from './NavItem';

import {
	HomeIcon,
	MapIcon,
	LightBulbIcon,
	CollectionIcon,
	CogIcon,
} from '@heroicons/react/outline';

const Sidebar = () => {
	return (
		<nav className='flex flex-col items-center justify-between w-56 h-screen py-[5vh] border-r border-black sticky top-0 dark:bg-gray-900 dark:text-gray-50'>
			<Logo />

			<ul className='flex flex-col items-center w-full space-y-16'>
				<NavItem name='Home' url='/dashboard'>
					<HomeIcon className='h-8' />
				</NavItem>
				<NavItem name='Guide' url='/guide'>
					<MapIcon className='h-8' />
				</NavItem>
				<NavItem name='Projects' url='/projects'>
					<LightBulbIcon className='h-8' />
				</NavItem>
				<NavItem name='Resources' url='/resources'>
					<CollectionIcon className='h-8' />
				</NavItem>
				<NavItem name='Settings' url='/settings'>
					<CogIcon className='h-8' />
				</NavItem>
			</ul>

			<div className='flex space-x-4'>
				<Profile />
				<ThemeSwitcherButton />
			</div>
		</nav>
	);
};

export default Sidebar;
