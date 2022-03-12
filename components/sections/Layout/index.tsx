import { ThemeSwitcherButton, SearchBar, Sidebar } from '@components/elements';

type LayoutProps = { children: JSX.Element };

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='relative flex min-h-screen transition-all bg-gray-50 dark:bg-gray-900 dark:text-gray-50'>
      <Sidebar />
      <div className='flex-1 max-w-5xl min-w-0 mx-auto overflow-auto'>
        <div className='flex items-center justify-between w-3/4 mx-auto space-x-12'>
          <SearchBar />
          <span>
            <ThemeSwitcherButton height='h-8' />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};
