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
          imageUrl='https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGludXh8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        />
        <ProgressCard
          name='Programming & Scripting'
          courseID='caiushcsa8231'
          instructor='Michael Myers'
          instructorID='89asc8as90c8'
          stage='2. Automation with Python'
          progress={0.33}
          url='automation-with-python'
          imageUrl='https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
        />
        <ProgressCard
          name='Cloud Platforms'
          courseID='uhsaidoua823'
          instructor='Corey Quinn'
          instructorID='doaisjd0as98'
          stage='1. Cloud Service Providers'
          progress={0.0}
          url='cloud-service-providers'
          imageUrl='https://images.unsplash.com/photo-1509803874385-db7c23652552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        />
        <ProgressCard
          name='DevOps Fundamentals'
          courseID='nidas9213'
          instructor='Paris Hilton'
          instructorID='adsoih0asjop'
          stage='1. DevOps concepts'
          progress={0.0}
          url='devops-concepts'
          imageUrl='https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VydmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
        />
      </ul>
    </div>
  );
};
