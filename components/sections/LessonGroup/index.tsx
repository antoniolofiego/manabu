import Link from 'next/link';

import ReactPlayer from 'react-player/youtube';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { LessonCard, MarkAsCompleteButton } from '@components/elements';

import type { LessonDetails } from '@types';

interface ILessonGroupProps {
  currentLesson: LessonDetails;
  allLessons: LessonDetails[];
  course: {
    id: string;
  };
}

export const LessonGroup: React.FC<ILessonGroupProps> = ({
  course,
  currentLesson,
  allLessons,
}) => {
  return (
    <div className='w-full space-y-8 overflow-y-hidden'>
      <Link href={`/courses/${course.id}`}>
        <a>
          <span className='flex items-center space-x-2 text-xl transform dark:hover:text-gray-400 hover:text-gray-700 hover:translate-x-2'>
            <ArrowLeftIcon className='h-4' />
            <span>Back to course page</span>
          </span>
        </a>
      </Link>
      <h3 className='text-3xl'>{`${currentLesson.lessonNumber}. ${currentLesson.name}`}</h3>
      <div className='relative flex flex-col w-full space-y-8 xl:space-y-0 xl:flex-row gap-x-8'>
        <div className='flex flex-col items-end mx-auto space-y-8'>
          <ReactPlayer
            url={currentLesson.videoUrl}
            playing={false}
            controls={true}
          />
          <MarkAsCompleteButton
            lessonId={currentLesson.id}
            initialCompleted={currentLesson.completed}
          />
        </div>
        <ul className='flex flex-col flex-1 space-y-4 '>
          {allLessons.map((lesson) => {
            return (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                currentLessonId={currentLesson.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
