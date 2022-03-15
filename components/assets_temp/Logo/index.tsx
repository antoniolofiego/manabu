import { FaChalkboardTeacher } from 'react-icons/fa';

interface ILogoProps {
  className: string;
}

export const Logo: React.FC<ILogoProps> = ({ className, ...props }) => {
  return (
    <div className='flex items-center space-x-4' {...props}>
      <FaChalkboardTeacher className={className} />
      <p className={`${className} font-mono`}>manabu</p>
    </div>
  );
};
