import * as Cards from '@components/shared/Card';

const CardGroup = () => {
  return (
    <div className='flex'>
      <Cards.ProjectCard />
      <Cards.ArticleCard />
      <Cards.ProgressCard />
    </div>
  );
};

export default CardGroup;
