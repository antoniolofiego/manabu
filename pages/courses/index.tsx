import { CourseCard } from '@components/elements';
import { Layout } from '@components/sections';

import { supabase } from '@utils/supabase';

import type { NextPage, GetStaticProps } from 'next';
import type { CourseDetails, InstructorDetails } from '@types';

interface Course extends CourseDetails {
  instructor: InstructorDetails;
}
interface ICoursesPageProps {
  courses: Course[];
}

const CoursesPage: NextPage<ICoursesPageProps> = ({ courses }) => {
  console.log(courses[0]);
  return (
    <Layout>
      <div className='grid gap-8 lg:grid-cols-2'>
        {courses.map((course) => {
          return <CourseCard course={course} key={course.id} />;
        })}
      </div>
    </Layout>
  );
};

export default CoursesPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data, error } = await supabase
    .from('courses')
    .select('*, instructors (*), lessons( total_lessons ) ', {
      count: 'exact',
    })
    .range(0, 9);

  if (error) {
    console.error(error);
    return { notFound: true };
  }

  if (data) {
    const courses: Course[] = data?.map((course) => {
      return {
        id: course.id,
        name: course.name,
        shortDescription: course.short_description,
        imageUrl: course.image_url,
        instructor: {
          id: course.instructors.id,
          name: course.instructors.name,
          imageUrl: course.instructors.image_url,
        },
      };
    });

    return {
      props: { courses },
    };
  }

  return { notFound: true };
};
