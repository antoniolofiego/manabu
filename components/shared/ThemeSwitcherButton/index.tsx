import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

const ThemeSwitcherButton: React.FC = () => {
	const { theme, setTheme, resolvedTheme } = useTheme();

	return (
		<button
			data-testid='themeSwitcher'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{resolvedTheme === 'dark' && <SunIcon className='w-8 h-8 text-gray-50' />}
			{resolvedTheme === 'light' && (
				<MoonIcon className='w-8 h-8 text-blue-700' />
			)}
		</button>
	);
};

export default ThemeSwitcherButton;
