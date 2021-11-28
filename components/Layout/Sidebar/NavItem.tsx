import Link from 'next/link';
import { useRouter } from 'next/router';

type NavItemProps = {
	name: string;
	url: string;
};

const NavItem: React.FC<NavItemProps> = ({ name, url, children }) => {
	const router = useRouter();
	const pageIsActive = (page: string): boolean => {
		return router.asPath.split('/')[1] === page.split('/')[1];
	};

	return (
		<Link href={url}>
			<a className='relative w-full group'>
				{pageIsActive(url) ? (
					<span className='absolute left-0 w-2 h-full bg-gray-900 dark:bg-gray-50'></span>
				) : (
					<span className='absolute left-0 w-2 h-full transition-all -translate-x-4 bg-black group-hover:translate-x-0 dark:bg-gray-50' />
				)}

				<span
					className={`flex items-center pl-12 space-x-4 ${
						pageIsActive(url) ? '' : 'group-hover:font-bold'
					}`}
				>
					{children}
					<span>{name || 'Home'}</span>
				</span>
			</a>
		</Link>
	);
};

export default NavItem;
