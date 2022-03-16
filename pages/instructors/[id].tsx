import { useRouter } from 'next/router';

import { Layout } from '@components/sections';

import { supabase } from '@utils/supabase';

import type { NextPage, GetStaticProps } from 'next';

const InstructorPage: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <Layout>
      <div>{id}</div>
    </Layout>
  );
};

export default InstructorPage;
