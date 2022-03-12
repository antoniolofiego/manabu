import {
  ProjectCard,
  ArticleCard,
  ShareProgressCard,
} from '@components/elements';

export const CardGroup = () => {
  return (
    <div className='flex'>
      <ProjectCard />
      <ArticleCard />
      <ShareProgressCard />
    </div>
  );
};
