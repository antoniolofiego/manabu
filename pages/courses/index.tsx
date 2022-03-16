import { useRouter } from 'next/router';

import { CourseGroup, Layout } from '@components/sections';

import { supabase } from '@utils/supabase';

import type { NextPage, GetStaticProps } from 'next';
import type { ICourse, ICourseGroup } from '@types';

const CoursesPage: NextPage<ICourseGroup> = ({ courses }) => {
  const router = useRouter();

  let filteredCourses = courses;
  let instructorName = '';

  const queryParams = router.asPath.split('?');

  if (queryParams.length > 1) {
    const [query, id] = queryParams[1].split('=');

    if (query === 'instructorId') {
      filteredCourses = courses.filter((course) => course.instructor.id === id);
      if (filteredCourses.length > 0) {
        instructorName = filteredCourses[0].instructor.name;
      } else {
        filteredCourses = courses;
      }
    }
  }

  return (
    <Layout>
      <div className='space-y-8'>
        <CourseGroup
          title={`Enroll in a new course${
            instructorName && ` by ${instructorName}`
          }`}
          courses={filteredCourses}
        />
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
