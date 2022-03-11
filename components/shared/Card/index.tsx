import {
  LightBulbIcon,
  NewspaperIcon,
  SpeakerphoneIcon,
} from '@heroicons/react/outline';

export const ProjectCard = () => {
  return (
    <section>
      <div className='flex items-center'>
        <LightBulbIcon className='h-8' />
        <h3>Start a project</h3>
      </div>
    </section>
  );
};

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

export const ProgressCard = () => {
  return (
    <section>
      <div className='flex items-center'>
        <SpeakerphoneIcon className='h-8' />
        <h3>Share your progress</h3>
      </div>
    </section>
  );
};
