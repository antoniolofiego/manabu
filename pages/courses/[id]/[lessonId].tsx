import Head from 'next/head';

import { Layout, LessonGroup } from '@components/sections';
import { supabase } from '@utils/supabase';

import type { NextPage, GetServerSideProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { LessonDetails } from '@types';

interface IParams extends ParsedUrlQuery {
  lessonId: string;
  id: string;
}

interface ILessonPageProps {
  currentLesson: LessonDetails;
  allLessons: LessonDetails[];
  course: {
    name: string;
    id: string;
  };
}

const LessonPage: NextPage<ILessonPageProps> = ({
  course,
  currentLesson,
  allLessons,
}) => {
  return (
    <>
      <Head>
        <title>{`${currentLesson.name} - manabu`}</title>
      </Head>

      <Layout>
        <LessonGroup
          course={course}
          currentLesson={currentLesson}
          allLessons={allLessons}
        />
      </Layout>
    </>
  );
};

export default LessonPage;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { id: courseId, lessonId } = params as IParams;

  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      redirect: {
        destination: `/courses/${courseId}`,
        permanent: false,
      },
    };
  }

  const { data: lessonsData, error: lessonsError } = await supabase
    .from('lessons')
    .select('*')
    .eq('course_id', courseId);

  if (lessonsError) {
    console.error(lessonsError);
    return { notFound: true };
  }

  if (lessonsData) {
    const lessonIds = lessonsData.map((lesson) => lesson.id);

    const { data: progressData, error: progressError } = await supabase
      .from('progress')
      .select('*')
      .eq('user_id', user.id)
      .in('lesson_id', lessonIds);

    console.log(progressData);

    if (progressError) {
      console.error(progressError);
      return { notFound: true };
    }

    if (progressData?.length === 0) {
      return {
        redirect: {
          destination: `/courses/${courseId}`,
          permanent: false,
        },
      };
    }

    if (progressData) {
      const currentLessonData = lessonsData.filter(
        (lesson) => lesson.id === lessonId
      )[0];

      const currentLessonProgressData = progressData.filter(
        (progress) => progress.lesson_id === lessonId
      )[0];

      const currentLesson: LessonDetails = {
        name: currentLessonData.name,
        id: currentLessonData.id,
        imageUrl: currentLessonData.image_url,
        lessonNumber: currentLessonData.lesson_number,
        completed: currentLessonProgressData.completed,
        videoUrl: currentLessonData.video_url,
      };

      const course = { id: courseId };

      const allLessons: LessonDetails[] = lessonsData
        .sort((a, b) => a.lesson_number - b.lesson_number)
        .map((lesson) => {
          const currentLessonProgressData = progressData.filter(
            (progress) => progress.lesson_id === lesson.id
          )[0];

          return {
            name: lesson.name,
            courseId: courseId,
            id: lesson.id,
            imageUrl: lesson.image_url,
            lessonNumber: lesson.lesson_number,
            completed: currentLessonProgressData.completed,
            videoUrl: lesson.video_url,
          };
        });

      return {
        props: { course, currentLesson, allLessons },
      };
    }
  }

  return { notFound: true };
};
