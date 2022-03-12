import { LightBulbIcon } from '@heroicons/react/outline';

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
