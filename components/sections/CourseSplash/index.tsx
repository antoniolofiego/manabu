import { useState } from 'react';

import Markdown from 'marked-react';
import Image from 'next/image';

import {
  InstructorBadge,
  LessonListItem,
  EnrollButton,
} from '@components/elements';

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
  const [enrolled, setEnrolled] = useState(false);
  return (
    <div className='space-y-8'>
      <div className='grid items-center grid-cols-5'>
        <h2 className='col-span-4 text-6xl font-extrabold'>{course.name}</h2>
        <EnrollButton
          courseId={course.id}
          setEnrolled={setEnrolled}
          enrolled={enrolled}
        />
      </div>
      <div className='grid grid-cols-2 gap-x-8'>
        <div className='space-y-8'>
          <InstructorBadge instructor={instructor} />
          <article className='prose dark:prose-invert'>
            <Markdown>{course.description}</Markdown>
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
            <p>{`${lessons.length} lessons${
              enrolled ? '' : ' - Enroll to get started'
            }`}</p>
            <ul className='space-y-4'>
              {lessons.map((lesson) => {
                return (
                  <LessonListItem
                    enrolled={enrolled}
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
