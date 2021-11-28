import Sidebar from './Sidebar';

type Props = { children: JSX.Element };

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className='flex min-h-screen transition-all bg-gray-50 dark:bg-gray-900 dark:text-gray-50'>
			<Sidebar />
			<div className='flex-1 min-w-0 overflow-auto'>{children}</div>
		</div>
	);
};

export default Layout;
