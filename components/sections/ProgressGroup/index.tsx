import { useState, useEffect } from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';

import { ProgressCard } from '@components/elements';

import { supabase } from '@utils/supabase';
import { useUser } from '@context/user';
import type { LessonProgress } from '@types';

export const ProgressGroup = () => {
  const [lessons, setLessons] = useState<LessonProgress[]>([]);

  const { user } = useUser();

  const handleError = useErrorHandler();

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase.rpc('next_lessons_for_user', {
        user_id: user?.id,
      });

      if (data) {
        const formattedData: LessonProgress[] = data?.map((lesson) => {
          return {
            id: lesson.id,
            name: lesson.name,
            lessonNumber: lesson.lesson_number,
            imageUrl: lesson.image_url,
            progress: lesson.progress,
            instructorName: lesson.instructor_name,
            instructorId: lesson.instructor_id,
            courseName: lesson.course_name,
            courseId: lesson.course_id,
          };
        });
        setLessons(() => formattedData);
      }

      if (error) handleError(error);
    };

    fetchData();
  }, [user, handleError]);

  return (
    user &&
    lessons.length > 0 && (
      <div className='space-y-8'>
        <h2 className='text-2xl font-extrabold'>Your courses</h2>

        <ul className='grid w-full gap-12 px-8 mx-auto lg:mx-0 lg:max-w-full lg:grid-cols-2'>
          <ErrorBoundary
            fallback={
              <p>
                We had troubles loading your courses!{' '}
                <span
                  className='font-bold transition cursor-pointer hover:text-gray-700 dark:hover:text-gray-400'
                  onClick={() => location.reload()}
                >
                  Please try refreshing.
                </span>
              </p>
            }
          >
            {lessons.map((lesson) => {
              return (
                <ProgressCard
                  key={lesson.id}
                  name={lesson.courseName}
                  courseID={lesson.courseId}
                  instructor={lesson.instructorName}
                  instructorID={lesson.instructorId}
                  lessonName={`${lesson.lessonNumber}. ${lesson.name}`}
                  progress={lesson.progress}
                  url={lesson.id}
                  imageUrl={lesson.imageUrl}
                />
              );
            })}
          </ErrorBoundary>
        </ul>
      </div>
    )
  );
};
