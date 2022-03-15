import { Heading, CourseCard } from '@components/elements';

import type { ICourse } from '@types';

interface ICourseGroupProps {
  courses: ICourse[];
  title: string;
}

export const CourseGroup: React.FC<ICourseGroupProps> = ({
  title,
  courses,
}) => {
  return (
    <div className='space-y-8'>
      <Heading text={title} />

      <div className='grid grid-cols-1 gap-12 lg:px-8 lg:grid-cols-2'>
        {courses.map((course) => {
          return <CourseCard course={course} key={course.id} />;
        })}
      </div>
    </div>
  );
};
