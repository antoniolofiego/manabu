import Link from 'next/link';
import Image from 'next/image';

import { InstructorBadge } from '@components/elements';

import type { CourseDetails, InstructorDetails } from '@types';

interface Course extends CourseDetails {
  instructor: InstructorDetails;
}

interface ICourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<ICourseCardProps> = ({ course }) => {
  return (
    <Link href={`/courses/${course.id}`} passHref>
      <div
        key={course.id}
        className='p-8 space-y-4 border border-gray-900 cursor-pointer rounded-xl dark:border-gray-50 hover:scale-[1.01] group transition'
      >
        <h3 className='text-2xl font-bold'>{course.name}</h3>
        <div className='relative w-full overflow-hidden border-2 border-gray-900 aspect-video rounded-xl dark:border-gray-50'>
          <Image src={course.imageUrl} alt={course.name} layout='fill' />
        </div>
        <p className='h-24'>{course.shortDescription}</p>
        <InstructorBadge instructor={course.instructor} noNav />
      </div>
    </Link>
  );
};
