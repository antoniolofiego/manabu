import { FaSpinner } from 'react-icons/fa';

interface iActionButtonProps {
  status: boolean;
  loading: boolean;
  clickHandler: () => void;
  statusPrompt: {
    trueState: string;
    falseState: string;
  };
}

export const ActionButton: React.FC<iActionButtonProps> = ({
  status,
  clickHandler,
  loading,
  statusPrompt,
}) => {
  return (
    <button
      className={`px-4 py-2 flex justify-center items-center transition border border-gray-900 rounded-full dark:border-gray-50 ${
        status ? 'hover:bg-red-400' : 'hover:bg-green-400'
      }  hover:text-gray-900`}
      onClick={clickHandler}
    >
      {loading ? (
        <FaSpinner className='h-6 animate-spin' data-testid='spinner' />
      ) : status ? (
        statusPrompt.trueState
      ) : (
        statusPrompt.falseState
      )}
    </button>
  );
};
