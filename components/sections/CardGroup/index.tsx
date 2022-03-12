import {
  ProjectCard,
  ArticleCard,
  ShareProgressCard,
} from '@components/elements';

export const CardGroup = () => {
  return (
    <div className='grid grid-cols-3 gap-8'>
      <ProjectCard />
      <ArticleCard />
      <ShareProgressCard />
    </div>
  );
};
