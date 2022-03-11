import Phase from '@components/shared/Phase';

const PhaseGroup = () => {
  return (
    <ul className='grid w-full gap-12 mx-auto lg:mx-0 lg:max-w-full lg:grid-cols-2 lg:grid-rows-2'>
      <Phase
        number={1}
        name='Linux & networking'
        stage='3. Introduction to Networking'
        progress={0.5}
        url='intro-to-networking'
      />
      <Phase
        number={2}
        name='Programming & Scripting'
        stage='2. Automation with Python'
        progress={0.33}
        url='automation-with-python'
      />
      <Phase
        number={3}
        name='Cloud Platforms'
        stage='1. Cloud Service Providers'
        progress={0.0}
        url='cloud-service-providers'
      />
      <Phase
        number={4}
        name='DevOps Fundamentals'
        stage='1. DevOps concepts'
        progress={0.0}
        url='devops-concepts'
      />
    </ul>
  );
};

export default PhaseGroup;
