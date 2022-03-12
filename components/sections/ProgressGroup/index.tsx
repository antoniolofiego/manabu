import { ProgressCard } from '@components/elements';

export const ProgressGroup = () => {
  return (
    <div className='space-y-8'>
      <h2 className='text-2xl font-extrabold'>Keep making progress</h2>

      <ul className='grid w-full gap-12 px-8 mx-auto lg:mx-0 lg:max-w-full lg:grid-cols-2 lg:grid-rows-2'>
        <ProgressCard
          name='Linux & networking'
          courseID='sand8cs9a8'
          instructor='Bill Nye'
          instructorID='iasdhiah'
          stage='3. Introduction to Networking'
          progress={0.5}
          url='intro-to-networking'
        />
        <ProgressCard
          name='Programming & Scripting'
          courseID='caiushcsa8231'
          instructor='Michael Myers'
          instructorID='89asc8as90c8'
          stage='2. Automation with Python'
          progress={0.33}
          url='automation-with-python'
        />
        <ProgressCard
          name='Cloud Platforms'
          courseID='uhsaidoua823'
          instructor='Corey Quinn'
          instructorID='doaisjd0as98'
          stage='1. Cloud Service Providers'
          progress={0.0}
          url='cloud-service-providers'
        />
        <ProgressCard
          name='DevOps Fundamentals'
          courseID='nidas9213'
          instructor='Paris Hilton'
          instructorID='adsoih0asjop'
          stage='1. DevOps concepts'
          progress={0.0}
          url='devops-concepts'
        />
      </ul>
    </div>
  );
};
