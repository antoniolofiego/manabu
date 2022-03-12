import { FaChalkboardTeacher } from 'react-icons/fa';

interface LogoProps {
  className: string;
}

export const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div className='flex items-center space-x-4' {...props}>
      <FaChalkboardTeacher className={className} />
      <p className={`${className} font-mono`}>manabu</p>
    </div>
  );
};
