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
    <a href={`/courses/${lesson.courseId}/${lesson.id}`}>
      <li
        className={`flex gap-4 px-4 py-2 hover:bg-gray-200 hover:text-gray-900 dark:hover:text-gray-50 dark:hover:bg-gray-700 transition border dark:border-gray-50 border-gray-900 rounded-xl h-16 cursor-pointer group ${
          currentLessonId === lesson.id &&
          'bg-gray-200 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        <div className='grid items-center w-4 grid-rows-2'>
          <p className='text-sm text-center '>{lesson.lessonNumber}</p>
          {lesson.completed && (
            <CheckCircleIcon className='h-4 text-green-700 dark:text-green-400' />
          )}
        </div>
        <h3 className='text-lg'>{lesson.name}</h3>
      </li>
    </a>
  );
};
