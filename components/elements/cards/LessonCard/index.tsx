import Link from 'next/link';

import { CheckCircleIcon } from '@heroicons/react/outline';

import type { LessonDetails } from '@types';

interface ILessonCardProps {
  lesson: LessonDetails;
  currentLessonId: string;
}

export const LessonCard: React.FC<ILessonCardProps> = ({
  lesson,
  currentLessonId,
}) => {
  return (
    <Link href={`/courses/${lesson.courseId}/${lesson.id}`} passHref>
      <li
        className={`flex w-full gap-4 px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-200 transition border dark:border-gray-50 border-gray-900 rounded-xl h-16 ${
          currentLessonId === lesson.id && 'bg-gray-500 hover:bg-gray-500'
        }`}
      >
        <div className='grid items-center w-4 grid-rows-2'>
          <p className='text-sm text-center'>{lesson.lessonNumber}</p>
          {lesson.completed && (
            <CheckCircleIcon className='h-4 text-green-400' />
          )}
        </div>
        <h3 className='text-lg'>{lesson.name}</h3>
      </li>
    </Link>
  );
};
