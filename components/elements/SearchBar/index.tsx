import { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

export const SearchBar: React.FC = () => {
  const [searchTerms, setSearchTerms] = useState('');

  return (
    <div className='flex items-center flex-1 my-8 border border-black rounded-2xl group focus-within:ring-2 dark:border-gray-50'>
      <SearchIcon className='h-4 pl-4' />
      <input
        className='w-full px-4 py-2 mx-auto transition-all focus:outline-none dark:bg-gray-900 rounded-2xl dark:placeholder-gray-400'
        placeholder='Search'
        value={searchTerms}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setSearchTerms(e.currentTarget.value)
        }
      />
    </div>
  );
};
