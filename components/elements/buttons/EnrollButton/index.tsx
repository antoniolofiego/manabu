import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaSpinner } from 'react-icons/fa';

import { useUser } from '@context/user';
import { supabase } from '@utils/supabase';

interface IEnrollButtonProps {
  courseId: string;
}

export const EnrollButton: React.FC<IEnrollButtonProps> = ({ courseId }) => {
  const [enrolled, setEnrolled] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user } = useUser();

  const router = useRouter();

  useEffect(() => {
    const getEnrollementStatus = async () => {
      if (user) {
        setLoading(true);

        const { data } = await supabase
          .from('enrollments')
          .select('*')
          .eq('user_id', user.id)
          .eq('course_id', courseId);

        if (data?.length !== 0) {
          setEnrolled(() => true);
        }

        setLoading(false);
      }
    };

    getEnrollementStatus();
  }, [user, courseId]);

  const handleEnrollment = async () => {
    if (!user) {
      router.push('/login');
    }

    setLoading(true);

    if (enrolled) {
      const { error: unenrollmentError } = await supabase
        .from('enrollments')
        .delete()
        .eq('user_id', user?.id)
        .eq('course_id', courseId);

      const { error: progressDeletionError } = await supabase.rpc(
        'delete_progress',
        {
          userid: user?.id,
          courseid: courseId,
        }
      );

      if (unenrollmentError || progressDeletionError) {
        console.error('There was a problem unenrolling.');
        return;
      }

      setEnrolled((prevValue) => !prevValue);
    }

    if (!enrolled) {
      const { error: enrollmentError } = await supabase
        .from('enrollments')
        .insert([{ user_id: user?.id, course_id: courseId }]);

      const { error: progressCreationError } = await supabase.rpc(
        'generate_progress',
        {
          userid: user?.id,
          courseid: courseId,
        }
      );

      if (enrollmentError || progressCreationError) {
        console.error('There was a problem unenrolling.');
        return;
      }

      setEnrolled((prevValue) => !prevValue);
    }
    setLoading(() => false);
  };

  return (
    <button
      className={`px-4 py-2 flex justify-center items-center transition border border-gray-900 rounded-full dark:border-gray-50 ${
        enrolled ? 'hover:bg-red-400' : 'hover:bg-green-400'
      }  hover:text-gray-900`}
      onClick={handleEnrollment}
    >
      {loading ? (
        <FaSpinner className='h-8 animate-spin' />
      ) : enrolled ? (
        'Unenroll'
      ) : (
        'Enroll'
      )}
    </button>
  );
};
