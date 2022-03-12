import { NewspaperIcon } from '@heroicons/react/outline';

export const ArticleCard = () => {
  return (
    <section className='p-8 space-y-2 border rounded-xl'>
      <div className='flex items-center gap-2'>
        <NewspaperIcon className='h-8' />
        <h3 className='text-xl'>Read an article</h3>
      </div>
      <div></div>
    </section>
  );
};
