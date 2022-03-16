import { Heading, InstructorCard } from '@components/elements';

import type { IExtendedInstructor } from '@types';

interface IInstructorPageProps {
  instructors: IExtendedInstructor[];
  title: string;
}

export const InstructorGroup: React.FC<IInstructorPageProps> = ({
  instructors,
  title,
}) => {
  return (
    <div className='space-y-8'>
      <Heading text={title} />

      <div className='flex flex-col gap-8'>
        {instructors.map((instructor) => {
          return <InstructorCard instructor={instructor} key={instructor.id} />;
        })}
      </div>
    </div>
  );
};
