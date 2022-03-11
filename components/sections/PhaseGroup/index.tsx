import Progress from '@components/shared/Progress';

const PhaseGroup = () => {
  return (
    <ul className='grid w-full gap-12 mx-auto lg:mx-0 lg:max-w-full lg:grid-cols-2 lg:grid-rows-2'>
      <Progress
        name='Linux & networking'
        instructor='Bill Nye'
        stage='3. Introduction to Networking'
        progress={0.5}
        url='intro-to-networking'
      />
      <Progress
        name='Programming & Scripting'
        instructor='Michael Myers'
        stage='2. Automation with Python'
        progress={0.33}
        url='automation-with-python'
      />
      <Progress
        name='Cloud Platforms'
        instructor='Corey Quinn'
        stage='1. Cloud Service Providers'
        progress={0.0}
        url='cloud-service-providers'
      />
      <Progress
        name='DevOps Fundamentals'
        instructor='Paris Hilton'
        stage='1. DevOps concepts'
        progress={0.0}
        url='devops-concepts'
      />
    </ul>
  );
};

export default PhaseGroup;
