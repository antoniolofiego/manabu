import type { LessonDetails } from '@types';

interface ILessonCardProps {
  completed: boolean;
  lesson: LessonDetails;
}

export const LessonCard: React.FC<ILessonCardProps> = ({
  completed,
  lesson,
}) => {
  return <div></div>;
};
