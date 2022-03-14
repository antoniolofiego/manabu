import { Layout, CourseSplash } from '@components/sections';

import { supabase } from '@utils/supabase';

import type { ParsedUrlQuery } from 'querystring';
import type { NextPage, GetStaticProps } from 'next';
import type { CourseDetails, InstructorDetails } from '@types';

interface ICoursePageProps {
  course: CourseDetails;
  instructor: InstructorDetails;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const CoursePage: NextPage<ICoursePageProps> = ({ course, instructor }) => {
  console.log(course);
  return (
    <Layout>
      <div className='space-y-8'>
        <span className='px-4 py-2 bg-green-400 rounded-full text-slate-700'>
          Course
        </span>
        <CourseSplash course={course} instructor={instructor} />
      </div>
    </Layout>
  );
};

export default CoursePage;

export async function getStaticPaths() {
  const { data } = await supabase.from('courses').select('id');

  const paths = data?.map((id) => {
    return {
      params: id,
    };
  });

  return { paths: paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;

  const { data, error } = await supabase.rpc('get_course_details', {
    courseid: id,
  });

  console.log(data);

  if (error) {
    console.error(error);
    return { notFound: true };
  }

  if (data) {
    const course = {
      name: data[0].course_name,
      id: data[0].course_id,
      imageUrl: data[0].course_image_url,
      description: data[0].course_description,
    };

    const instructor = {
      name: data[0].instructor_name,
      id: data[0].instructor_id,
      imageUrl: data[0].instructor_image_url,
    };

    return {
      props: { course, instructor },
    };
  }

  return { notFound: true };
};
