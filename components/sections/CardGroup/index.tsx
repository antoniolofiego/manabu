import {
  FindACourseCard,
  ArticleCard,
  ShareProgressCard,
} from '@components/elements';

export const CardGroup = () => {
  return (
    <div className='grid grid-cols-3 gap-8'>
      <FindACourseCard />
      <ArticleCard />
      <ShareProgressCard />
    </div>
  );
};
