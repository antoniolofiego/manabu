import { CourseGroup, Layout } from '@components/sections';

import { supabase } from '@utils/supabase';

import type { NextPage, GetStaticProps } from 'next';
import type { ICourse, ICourseGroup } from '@types';

const CoursesPage: NextPage<ICourseGroup> = ({ courses }) => {
  console.log(courses[0]);
  return (
    <Layout>
      <div className='space-y-8'>
        <CourseGroup title='Enroll in a new course' courses={courses} />
      </div>
    </Layout>
  );
};

export default CoursesPage;

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await supabase
    .from('courses')
    .select('*, instructors (*)', {
      count: 'exact',
    });

  if (error) {
    console.error(error);
    return { notFound: true };
  }

  if (data) {
    const courses: ICourse[] = data?.map((course) => {
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
