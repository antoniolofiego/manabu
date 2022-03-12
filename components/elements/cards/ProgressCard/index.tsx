import ProgressBadge from './ProgressBadge';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';

interface ProgressCardProps {
  name: string;
  courseID: string;
  instructor: string;
  instructorID: string;
  stage: string;
  progress: number;
  url: string;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  name,
  courseID,
  instructor,
  instructorID,
  stage,
  progress,
  url,
}) => {
  const prompt = progress > 0 ? 'Continue' : 'Get started';

  return (
    <section className='relative p-8 border border-gray-900 shadow-lg dark:border-gray-50 rounded-xl justify-self-stretch'>
      <div className='absolute top-0 right-0 p-8 -m-8'>
        <ProgressBadge
          percent={progress}
          circleColor='text-blue-700 dark:text-blue-400'
        />
      </div>

      <div className='mb-8'>
        <Link href={`/courses/${courseID}}`}>
          <a className='text-2xl transition dark:hover:text-gray-400 hover:text-gray-500'>
            {name}
          </a>
        </Link>

        <h3 className='text-lg font-bold'>
          by{' '}
          <Link href={`/instructors/${instructorID}}`}>
            <a className='text-lg transition dark:hover:text-gray-400 hover:text-gray-500'>
              {instructor}
            </a>
          </Link>
        </h3>
      </div>

      <div className='space-y-2'>
        <h3 className='font-medium'>{stage}</h3>
        <Link href={`/courses/${courseID}}/${url}`}>
          <a className='flex items-center space-x-2 group'>
            <span className='transition dark:group-hover:text-gray-400 group-hover:text-gray-500'>
              {prompt}
            </span>
            <ArrowRightIcon className='h-5 transition-all translate-x-0 group-hover:translate-x-2 dark:group-hover:text-gray-400 group-hover:text-gray-500' />
          </a>
        </Link>
      </div>
    </section>
  );
};
