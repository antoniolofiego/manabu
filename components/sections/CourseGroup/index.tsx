import { CourseCard } from '@components/elements';

import type { ICourseGroup } from '@types';

export const CourseGroup: React.FC<ICourseGroup> = ({ courses }) => {
  return (
    <div className='grid gap-8 lg:grid-cols-2'>
      {courses.map((course) => {
        return <CourseCard course={course} key={course.id} />;
      })}
    </div>
  );
};
