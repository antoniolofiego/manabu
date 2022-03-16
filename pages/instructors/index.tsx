import { Layout, InstructorGroup } from '@components/sections';

import { supabase } from '@utils/supabase';

import type { NextPage, GetStaticProps } from 'next';
import type { InstructorDetails } from '@types';

interface IExtendedInstructor extends InstructorDetails {
  numOfCourses: number;
}

interface IInstructorPageProps {
  instructors: IExtendedInstructor[];
}

const InstructorsPage: NextPage<IInstructorPageProps> = ({ instructors }) => {
  return (
    <Layout>
      <InstructorGroup instructors={instructors} title='Meet our instructors' />
    </Layout>
  );
};

export default InstructorsPage;

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await supabase
    .from('instructors')
    .select('*, courses( id ) ');

  if (error) {
    console.error(error);
    return { notFound: true };
  }

  if (data) {
    const instructors: InstructorDetails[] = data?.map((instructor) => {
      return {
        id: instructor.id,
        name: instructor.name,
        description: instructor.description,
        imageUrl: instructor.image_url,
        numOfCourses: instructor.courses.length,
      };
    });

    return {
      props: { instructors },
    };
  }

  return { notFound: true };
};
