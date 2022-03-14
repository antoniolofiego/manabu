import ReactMarkdown from 'react-markdown';

import { InstructorBadge } from '@components/elements';

import type { CourseDetails, InstructorDetails } from '@types';

interface ICourseSplashProps {
  course: CourseDetails;
  instructor: InstructorDetails;
}

export const CourseSplash: React.FC<ICourseSplashProps> = ({
  course,
  instructor,
}) => {
  return (
    <div className='space-y-8'>
      <h2 className='text-4xl font-extrabold'>{course.name}</h2>
      <InstructorBadge instructor={instructor} />
      <article className='prose dark:prose-invert'>
        <ReactMarkdown>{course.description}</ReactMarkdown>
      </article>
    </div>
  );
};
