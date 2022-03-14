import type { LessonDetails } from '@types';

interface ILessonCardProps {
  lesson: LessonDetails;
}

export const LessonCard: React.FC<ILessonCardProps> = ({ lesson }) => {
  return <div>{lesson.name}</div>;
};
