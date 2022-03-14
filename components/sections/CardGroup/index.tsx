import { FindACourseCard, ShareProgressCard } from '@components/elements';

export const CardGroup = () => {
  return (
    <div className='space-y-8'>
      <h2 className='text-2xl font-extrabold'>Looking for something to do?</h2>

      <div className='grid grid-cols-2 gap-8 px-8'>
        <FindACourseCard />
        <ShareProgressCard />
      </div>
    </div>
  );
};
