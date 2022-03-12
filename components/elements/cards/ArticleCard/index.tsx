import { NewspaperIcon } from '@heroicons/react/outline';

export const ArticleCard = () => {
  return (
    <section>
      <div className='flex items-center'>
        <NewspaperIcon className='h-8' />
        <h3>Read an article</h3>
      </div>
    </section>
  );
};
