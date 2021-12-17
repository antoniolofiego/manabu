import Sidebar from './Sidebar';
import ThemeSwitcherButton from '@components/shared/ThemeSwitcherButton';

type LayoutProps = { children: JSX.Element };

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='relative flex min-h-screen transition-all bg-gray-50 dark:bg-gray-900 dark:text-gray-50'>
			<Sidebar />
			<div className='flex-1 min-w-0 overflow-auto'>{children}</div>
			<span className='fixed bottom-0 right-0 m-8'>
				<ThemeSwitcherButton height='h-8' />
			</span>
		</div>
	);
};

export default Layout;
