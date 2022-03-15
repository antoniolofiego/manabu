import Link from 'next/link';

import { ArrowLeftIcon } from '@heroicons/react/outline';
import { VideoPlayer } from '@components/elements';
import { Layout } from '@components/sections';
import { supabase } from '@utils/supabase';

import type { NextPage, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { LessonDetails } from '@types';
interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface ILessonPageProps {
  lesson: LessonDetails;
  course: {
    name: string;
    id: string;
  };
}

const LessonPage: NextPage<ILessonPageProps> = ({ course, lesson }) => {
  return (
    <Layout>
      <div className='w-full space-y-3'>
        <Link href={`/courses/${course.id}`}>
          <a>
            <span className='flex items-center space-x-2 text-xl transform dark:hover:text-gray-400 hover:text-gray-700 hover:translate-x-2'>
              <ArrowLeftIcon className='h-4' />
              <span>Back to {course.name}</span>
            </span>
          </a>
        </Link>
        <h3 className='text-3xl'>{`${lesson.lessonNumber}. ${lesson.name}`}</h3>
        <VideoPlayer videoUrl={lesson.videoUrl} />
      </div>
    </Layout>
  );
};

export default LessonPage;

export async function getStaticPaths() {
  const { data } = await supabase.from('lessons').select('id, course_id');

  const paths = data?.map((id) => {
    return {
      params: { lessonId: id.id, id: id.course_id },
    };
  });

  console.log(paths);

  return { paths: paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id: courseId, lessonId } = context.params as IParams;

  const { data: lessonData, error: lessonError } = await supabase
    .from('lessons')
    .select('*')
    .eq('id', lessonId);

  if (lessonError) {
    console.error(lessonError);
    return { notFound: true };
  }

  const { data: courseData, error: courseError } = await supabase
    .from('courses')
    .select('id, name')
    .eq('id', courseId);

  if (courseError) {
    console.error(courseError);
    return { notFound: true };
  }

  if (courseData && lessonData) {
    const lesson = {
      name: lessonData[0].name,
      id: lessonData[0].id,
      imageUrl: lessonData[0].image_url,
      lessonNumber: lessonData[0].lesson_number,
      videoUrl: lessonData[0].video_url,
    };

    const course = { name: courseData[0].name, id: courseData[0].id };

    console.log(course);

    return {
      props: { course, lesson },
    };
  }

  return { notFound: true };
};
