import { useState } from 'react';

import { ActionButton } from '../ActionButton';

import { supabase } from '@utils/supabase';
import { useUser } from '@context/user';

interface IMarkAsCompleteProps {
  lessonId: string;
  initialCompleted: boolean;
}

export const MarkAsCompleteButton: React.FC<IMarkAsCompleteProps> = ({
  lessonId,
  initialCompleted,
}) => {
  const [completed, setCompleted] = useState(initialCompleted);
  const { user } = useUser();

  const [loading, setLoading] = useState(false);

  const handleCompletion = async () => {
    setLoading(true);
    const { error } = await supabase
      .from('progress')
      .update({ completed: !initialCompleted })
      .eq('user_id', user?.id)
      .eq('lesson_id', lessonId);

    if (error) {
      console.error(error);
    }

    setCompleted((prevCompleted) => !prevCompleted);
    setLoading(() => false);
  };

  return (
    <ActionButton
      clickHandler={handleCompletion}
      loading={loading}
      status={completed}
      statusPrompt={{
        trueState: 'Mark as incomplete',
        falseState: 'Mark as completed',
      }}
    />
  );
};
