import Head from 'next/head';
import { Layout, CourseSplash } from '@components/sections';

import { supabase } from '@utils/supabase';

import type { ParsedUrlQuery } from 'querystring';
import type { NextPage, GetStaticProps } from 'next';
import type { CourseDetails, InstructorDetails, LessonDetails } from '@types';

interface ICoursePageProps {
  course: CourseDetails;
  instructor: InstructorDetails;
  lessons: LessonDetails[];
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const CoursePage: NextPage<ICoursePageProps> = ({
  course,
  instructor,
  lessons,
}) => {
  return (
    <>
      <Head>
        <title>{`${course.name} - manabu`}</title>
      </Head>
      <Layout>
        <div className='space-y-8'>
          <span className='px-4 py-2 bg-green-400 rounded-full text-slate-700'>
            Course
          </span>
          <CourseSplash
            course={course}
            instructor={instructor}
            lessons={lessons}
          />
        </div>
      </Layout>
    </>
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

  return { paths: paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;

  const { data: courseData, error: courseError } = await supabase.rpc(
    'get_course_details',
    {
      courseid: id,
    }
  );

  if (courseError) {
    console.error(courseError);
    return { notFound: true };
  }

  const { data: lessonsData, error: lessonError } = await supabase.rpc(
    'get_lessons_for_course',
    {
      courseid: id,
    }
  );

  if (lessonError) {
    console.error(lessonError);
    return { notFound: true };
  }

  if (courseData && lessonsData) {
    const course = {
      name: courseData[0].course_name,
      id: courseData[0].course_id,
      imageUrl: courseData[0].course_image_url,
      description: courseData[0].course_description,
    };

    const instructor = {
      name: courseData[0].instructor_name,
      id: courseData[0].instructor_id,
      imageUrl: courseData[0].instructor_image_url,
    };

    const lessons = lessonsData
      .sort((a, b) => a.lesson_number - b.lesson_number)
      .map((lesson) => {
        return {
          name: lesson.name,
          id: lesson.id,
          imageUrl: lesson.image_url,
          lessonNumber: lesson.lesson_number,
          videoUrl: lesson.video_url,
        };
      });

    return {
      props: { course, instructor, lessons },
    };
  }

  return { notFound: true };
};
