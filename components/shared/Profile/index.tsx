import Image from 'next/image';

const Profile = () => {
	return (
		<div className='relative w-24 h-24 overflow-hidden rounded-full'>
			<Image
				alt='profile picture'
				src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
				layout='fill'
				objectFit='cover'
			/>
		</div>
	);
};

export default Profile;
