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
    <div className='grid items-center grid-cols-3 space-x-4 md:flex'>
      <div className='relative w-16 h-16 overflow-hidden rounded-full lg:h-24 lg:w-24'>
        {instructor.imageUrl ? (
          noNav ? (
            <Image
              src={instructor.imageUrl}
              layout='fill'
              objectFit='cover'
              alt={`${instructor.name} profile picture`}
            />
          ) : (
            <Link href={`/courses?instructorId=${instructor.id}`}>
              <a data-testid='link'>
                <Image
                  src={instructor.imageUrl}
                  layout='fill'
                  objectFit='cover'
                  className='cursor-pointer'
                  alt={`${instructor.name} profile picture`}
                />
              </a>
            </Link>
          )
        ) : (
          <span className='absolute w-full h-full bg-gradient-to-br from-red-500 to-blue-500' />
        )}
      </div>
      <div className='col-span-2'>
        <p className='font-mono text-sm capitalize'>Instructor</p>
        {noNav ? (
          <p className='text-sm md:text-lg'>{instructor.name}</p>
        ) : (
          <Link href={`/courses?instructorId=${instructor.id}`}>
            <a
              className='text-sm transition md:text-lg dark:hover:text-gray-400 hover:text-gray-700'
              data-testid='link'
            >
              {instructor.name}
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};
