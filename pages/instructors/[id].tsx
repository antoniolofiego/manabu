import { useRouter } from 'next/router';

import { Layout } from '@components/sections';

import type { NextPage } from 'next';

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
