import { useState, useEffect } from 'react';

import Image from 'next/image';
import Dropdown from './Dropdown';
import { supabase } from '@utils/supabase';

const Profile = () => {
	const [imgUrl, setImgUrl] = useState('');

	useEffect(() => {
		const user = supabase.auth.user();
		setImgUrl(user?.user_metadata.avatar_url);
	}, []);

	return (
		<div className='flex flex-col'>
			<Dropdown>
				<div className='relative w-24 h-24 overflow-hidden rounded-full'>
					{imgUrl && (
						<Image
							alt='profile picture'
							src={imgUrl}
							layout='fill'
							objectFit='cover'
						/>
					)}
				</div>
			</Dropdown>
		</div>
	);
};

export default Profile;
