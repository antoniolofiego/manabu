import { ThemeSwitcherButton, SearchBar } from '@components/elements';
import { Sidebar } from '@components/sections';

type LayoutProps = { children: JSX.Element };

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='relative flex min-h-screen transition-all bg-gray-50 dark:bg-gray-900 dark:text-gray-50'>
      <Sidebar />
      <main className='flex-1 max-w-6xl min-w-0 px-12 mx-auto mb-8 overflow-auto'>
        <div className='flex items-center justify-between w-3/4 mx-auto space-x-12'>
          <SearchBar />
          <span>
            <ThemeSwitcherButton height='h-8' />
          </span>
        </div>
        {children}
      </main>
    </div>
  );
};
