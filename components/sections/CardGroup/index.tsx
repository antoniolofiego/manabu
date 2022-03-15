import {
  FindACourseCard,
  Heading,
  ShareProgressCard,
} from '@components/elements';

export const CardGroup = () => {
  return (
    <div className='space-y-8'>
      <Heading text='Looking for something to do?' />

      <div className='grid grid-cols-1 gap-8 px-8 lg:grid-cols-2'>
        <FindACourseCard />
        <ShareProgressCard />
      </div>
    </div>
  );
};
