import { useState, useEffect } from 'react';

import { useTheme } from 'next-themes';

interface IProgressBadgeProps {
  percent: number;
  width?: number;
  strokeWidth?: number;
  circleColor: string;
}

const ProgressBadge: React.FC<IProgressBadgeProps> = ({
  percent,
  width = 100,
  strokeWidth = 1,
  circleColor,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { resolvedTheme } = useTheme();

  if (!mounted) return null;

  const circleFill =
    resolvedTheme === 'light' ? 'text-gray-50' : 'text-gray-900';

  const strokeFill =
    resolvedTheme === 'light'
      ? 'rgba(17, 24, 39, 100)'
      : 'rgba(249, 250, 251, 100)';

  const MIN_OFFSET = 300; // Ensuring that even when it's 0 there's a minimum portion of circle

  const pos = width / 2; // Always centered in the SVG viewbox
  const radius = pos - strokeWidth * 2;
  const circumference = radius * 2 * Math.PI;

  const offset = Math.min(circumference - percent * circumference, MIN_OFFSET);

  return (
    <span className='relative flex items-center justify-center flex-shrink'>
      <span className='z-10 text-2xl'>{percent * 100}%</span>
      <svg
        height={width}
        width={width}
        className='absolute transform -rotate-90'
      >
        <circle
          className={circleFill}
          strokeWidth={strokeWidth}
          stroke={strokeFill}
          fill='currentColor'
          r={radius}
          cx={pos}
          cy={pos}
        />
        <circle
          className={circleColor}
          strokeWidth={strokeWidth * 4}
          stroke='currentColor'
          fill='transparent'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
          r={radius}
          cx={pos}
          cy={pos}
        />
      </svg>
    </span>
  );
};

export default ProgressBadge;
