import { SpeakerphoneIcon } from '@heroicons/react/outline';

export const ShareProgressCard = () => {
  return (
    <section className='p-8 space-y-2 border border-gray-900 dark:border-gray-50 rounded-xl'>
      <div className='flex items-center gap-2'>
        <SpeakerphoneIcon className='h-8' />
        <h3 className='text-xl'>Share your progress</h3>
      </div>
    </section>
  );
};
