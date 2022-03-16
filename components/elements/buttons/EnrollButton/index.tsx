import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { ActionButton } from '../ActionButton';

import { useUser } from '@context/user';
import { supabase } from '@utils/supabase';

import type { Dispatch, SetStateAction } from 'react';

interface IEnrollButtonProps {
  courseId: string;
  enrolled: boolean;
  setEnrolled: Dispatch<SetStateAction<boolean>>;
}

export const EnrollButton: React.FC<IEnrollButtonProps> = ({
  courseId,
  enrolled,
  setEnrolled,
}) => {
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
  }, [user, courseId, setEnrolled]);

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
    <ActionButton
      clickHandler={handleEnrollment}
      loading={loading}
      status={enrolled}
      statusPrompt={{ trueState: 'Unenroll', falseState: 'Enroll' }}
    />
  );
};
