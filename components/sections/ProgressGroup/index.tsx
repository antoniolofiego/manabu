import { Progress } from '@components/shared/';

export const ProgressGroup = () => {
  return (
    <ul className='grid w-full gap-12 mx-auto lg:mx-0 lg:max-w-full lg:grid-cols-2 lg:grid-rows-2'>
      <Progress
        name='Linux & networking'
        courseID='sand8cs9a8'
        instructor='Bill Nye'
        stage='3. Introduction to Networking'
        progress={0.5}
        url='intro-to-networking'
      />
      <Progress
        name='Programming & Scripting'
        courseID='caiushcsa8231'
        instructor='Michael Myers'
        stage='2. Automation with Python'
        progress={0.33}
        url='automation-with-python'
      />
      <Progress
        name='Cloud Platforms'
        courseID='uhsaidoua823'
        instructor='Corey Quinn'
        stage='1. Cloud Service Providers'
        progress={0.0}
        url='cloud-service-providers'
      />
      <Progress
        name='DevOps Fundamentals'
        courseID='nidas9213'
        instructor='Paris Hilton'
        stage='1. DevOps concepts'
        progress={0.0}
        url='devops-concepts'
      />
    </ul>
  );
};
