import {
  ProjectCard,
  ArticleCard,
  ShareProgressCard,
} from '@components/shared/';

export const CardGroup = () => {
  return (
    <div className='flex'>
      <ProjectCard />
      <ArticleCard />
      <ShareProgressCard />
    </div>
  );
};
