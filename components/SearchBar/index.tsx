import { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

const SearchBar: React.FC = () => {
	const [searchTerms, setSearchTerms] = useState('');

	return (
		<div className='flex items-center w-full max-w-2xl px-4 py-2 mx-auto my-8 space-x-4 border border-black rounded-2xl group focus-within:ring-2'>
			<SearchIcon className='h-4' />
			<input
				className='focus:outline-none'
				placeholder='Search'
				value={searchTerms}
				onChange={(e: React.FormEvent<HTMLInputElement>) =>
					setSearchTerms(e.currentTarget.value)
				}
			/>
		</div>
	);
};

export default SearchBar;
