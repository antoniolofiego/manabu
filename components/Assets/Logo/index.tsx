import { FaChalkboardTeacher } from 'react-icons/fa';

interface LogoProps {
  className: string;
}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div className='flex items-center space-x-4' {...props}>
      <FaChalkboardTeacher className={className} />
      <p className={`${className} font-mono`}>Manabu</p>
    </div>
  );
};

export default Logo;
