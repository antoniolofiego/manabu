import { LightBulbIcon } from '@heroicons/react/outline';

export const FindACourseCard = () => {
  return (
    <section className='p-8 space-y-2 border border-gray-900 dark:border-gray-50 rounded-xl'>
      <div className='flex items-center gap-2'>
        <LightBulbIcon className='h-8' />
        <h3 className='text-xl'>Find a new course</h3>
      </div>
    </section>
  );
};
