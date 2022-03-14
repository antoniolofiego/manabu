import Link from 'next/link';
import type { LessonDetails } from '@types';

interface ILessonCardProps {
  lesson: LessonDetails;
  courseId: string;
}

export const LessonCard: React.FC<ILessonCardProps> = ({
  lesson,
  courseId,
}) => {
  return (
    <div className='flex items-center space-x-4 transition group hover:translate-x-2'>
      <p className='dark:group-hover:text-gray-400 group-hover:text-gray-700'>
        #{lesson.lessonNumber}
      </p>
      <Link href={`/courses/${courseId}/${lesson.id}`}>
        <a className='text-2xl dark:group-hover:text-gray-400 group-hover:text-gray-700'>
          {lesson.name}
        </a>
      </Link>
    </div>
  );
};
