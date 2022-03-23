interface IHeadingProps {
  text: string;
}

export const Heading: React.FC<IHeadingProps> = ({ text }) => {
  return <h2 className='text-2xl font-extrabold'>{text}</h2>;
};
