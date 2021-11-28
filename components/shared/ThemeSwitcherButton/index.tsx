import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

const ThemeSwitcherButton: React.FC = () => {
	const { theme, setTheme, resolvedTheme } = useTheme();

	return (
		<button
			data-testid='themeSwitcher'
			className='flex items-center w-full text-sm rounded-md group'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{resolvedTheme === 'dark' && (
				<SunIcon className={'h-6 w-6 text-gray-50'} />
			)}
			{resolvedTheme === 'light' && (
				<MoonIcon className={'h-6 w-6 text-gray-900'} />
			)}
		</button>
	);
};

export default ThemeSwitcherButton;
