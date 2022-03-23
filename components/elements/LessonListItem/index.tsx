import Link from 'next/link';
import type { LessonDetails } from '@types';

import { useUser } from '@context/user';

interface ILessonListItemProps {
  lesson: LessonDetails;
  courseId: string;
  enrolled: boolean;
}

export const LessonListItem: React.FC<ILessonListItemProps> = ({
  lesson,
  courseId,
  enrolled,
}) => {
  const { user } = useUser();
  return (
    <div className='flex items-center space-x-4 transition group hover:translate-x-2'>
      <p
        className={`dark:group-hover:text-gray-400 group-hover:text-gray-700 ${
          !enrolled && 'text-gray-500 hover:text-gray-500'
        }`}
      >
        #{lesson.lessonNumber}
      </p>

      <Link
        href={
          user
            ? enrolled
              ? `/courses/${courseId}/${lesson.id}`
              : `/courses/${courseId}`
            : '/login'
        }
      >
        <a
          className={`text-2xl dark:group-hover:text-gray-400 group-hover:text-gray-700 ${
            !enrolled && 'text-gray-500 hover:text-gray-500'
          }`}
        >
          {lesson.name}
        </a>
      </Link>
    </div>
  );
};
