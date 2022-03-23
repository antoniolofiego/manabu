import Image from 'next/image';
import Link from 'next/link';

import type { IExtendedInstructor } from '@types';

interface IInstructorCardProps {
  instructor: IExtendedInstructor;
}

export const InstructorCard: React.FC<IInstructorCardProps> = ({
  instructor,
}) => {
  return (
    <Link href={`/courses?instructorId=${instructor.id}`} passHref>
      <article className='flex flex-col items-center p-8 space-x-8 border cursor-pointer rounded-xl md:flex-row hover:scale-[1.01]'>
        <div className='relative flex-shrink-0 w-32 h-32 overflow-hidden rounded-full lg:w-64 lg:h-64'>
          <Image
            src={instructor.imageUrl as string}
            alt={instructor.name}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='flex flex-col space-y-4'>
          <h3 className='text-2xl font-bold'>{instructor.name}</h3>
          <p className=''>{instructor.description}</p>
          <p className='pt-2'>
            {instructor.numOfCourses} course{instructor.numOfCourses > 1 && 's'}{' '}
            on <span className='font-mono'>manabu</span>
          </p>
        </div>
      </article>
    </Link>
  );
};
