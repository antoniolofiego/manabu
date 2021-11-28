import Sidebar from './Sidebar';

type Props = { children: JSX.Element };

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className='flex min-h-screen'>
			<Sidebar />
			<div className='flex-1 min-w-0 overflow-auto transition bg-indigo dark:bg-gray-900 dark:text-gray-50'>
				{children}
			</div>
		</div>
	);
};

export default Layout;
