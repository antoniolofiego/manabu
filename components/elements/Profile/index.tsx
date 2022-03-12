import Image from 'next/image';
import Dropdown from './Dropdown';
import { useUser } from '@context/user';

export const Profile = () => {
  const { user } = useUser();

  return (
    <div className='flex flex-col'>
      <Dropdown>
        <div className='relative w-24 h-24 overflow-hidden rounded-full'>
          {user && (
            <Image
              alt='profile picture'
              src={user?.user_metadata.avatar_url}
              layout='fill'
              objectFit='cover'
            />
          )}
        </div>
      </Dropdown>
    </div>
  );
};
