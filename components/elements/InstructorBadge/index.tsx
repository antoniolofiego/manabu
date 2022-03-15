import Image from 'next/image';
import Link from 'next/link';

import type { InstructorDetails } from '@types';
interface IInstructorBadgeProps {
  instructor: InstructorDetails;
  noNav?: boolean;
}

export const InstructorBadge: React.FC<IInstructorBadgeProps> = ({
  instructor,
  noNav,
}) => {
  return (
    <div className='flex items-center space-x-4'>
      <div className='relative w-24 h-24 overflow-hidden rounded-full'>
        {instructor.imageUrl ? (
          <Image
            src={instructor.imageUrl}
            layout='fill'
            alt={`${instructor.name} profile picture`}
          />
        ) : (
          <span className='absolute w-full h-full bg-gradient-to-br from-red-500 to-blue-500' />
        )}
      </div>
      <div>
        <p className='font-mono text-sm capitalize'>Instructor</p>
        {noNav ? (
          <p className='text-lg'>{instructor.name}</p>
        ) : (
          <Link href={`/instructors/${instructor.id}`}>
            <a className='text-lg'>{instructor.name}</a>
          </Link>
        )}
      </div>
    </div>
  );
};
