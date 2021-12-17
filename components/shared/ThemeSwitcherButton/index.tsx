import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

type ThemeSwitcherButtonProps = {
	height?: string;
};

const ThemeSwitcherButton: React.FC<ThemeSwitcherButtonProps> = ({
	height,
}) => {
	const { theme, setTheme, resolvedTheme } = useTheme();

	return (
		<button
			data-testid='themeSwitcher'
			className={`flex items-center text-sm rounded-md group ${height}`}
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{resolvedTheme === 'dark' && (
				<SunIcon className={'h-full w-full text-gray-50'} />
			)}
			{resolvedTheme === 'light' && (
				<MoonIcon className={'h-full w-full text-gray-900'} />
			)}
		</button>
	);
};

export default ThemeSwitcherButton;
