import {
  ProgressGroup,
  CardGroup,
  Layout,
  CourseGroup,
} from '@components/sections';
import Head from 'next/head';

import { supabase } from '@utils/supabase';

import type { NextPage, GetStaticProps } from 'next';
import type { ICourse, ICourseGroup } from '@types';

const Home: NextPage<ICourseGroup> = ({ courses }) => {
  return (
    <>
      <Head>
        <title>Home | manabu</title>
        <meta
          name='description'
          content='manabu is a community-based learning platform, where all courses are free and open source.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <div className='mx-auto space-y-12'>
          <ProgressGroup />
          <CourseGroup title='Most recent courses' courses={courses} />
          <CardGroup />
        </div>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await supabase
    .from('courses')
    .select('*, instructors (*)', {
      count: 'exact',
    })
    .order('created_at', { ascending: false })
    .limit(2);

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
