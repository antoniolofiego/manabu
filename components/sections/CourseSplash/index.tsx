import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

import { InstructorBadge, LessonCard } from '@components/elements';

import type { CourseDetails, InstructorDetails, LessonDetails } from '@types';

interface ICourseSplashProps {
  course: CourseDetails;
  instructor: InstructorDetails;
  lessons: LessonDetails[];
}

export const CourseSplash: React.FC<ICourseSplashProps> = ({
  course,
  instructor,
  lessons,
}) => {
  return (
    <div className='space-y-8'>
      <h2 className='text-6xl font-extrabold'>{course.name}</h2>
      <div className='grid grid-cols-2 gap-x-8'>
        <div className='space-y-8'>
          <InstructorBadge instructor={instructor} />
          <article className='prose dark:prose-invert'>
            <ReactMarkdown>{course.description}</ReactMarkdown>
          </article>
        </div>
        <div className='space-y-8'>
          <div className='relative overflow-hidden border border-gray-900 rounded-lg aspect-video dark:border-gray-50'>
            <Image
              src={course.imageUrl}
              alt={`${course.name} splash image`}
              layout='fill'
            />
          </div>
          <div className='space-y-4'>
            <h3 className='text-4xl font-extrabold'>Course content</h3>
            <p>{lessons.length} lessons</p>
            <ul className='space-y-4'>
              {lessons.map((lesson) => {
                return (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    courseId={course.id}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
