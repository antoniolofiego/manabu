type ProgressBadgeProps = {
	percent: number;
	width?: number;
	strokeWidth?: number;
	circleColor: string;
};

const ProgressBadge: React.FC<ProgressBadgeProps> = ({
	percent,
	width = 100,
	strokeWidth = 1,
	circleColor,
}) => {
	const MIN_OFFSET = 300; // Ensuring that even when it's 0 there's a minimum portion of circle

	const pos = width / 2;
	const radius = pos - strokeWidth * 2;
	const circumference = radius * 2 * Math.PI;

	const offset = Math.min(circumference - percent * circumference, MIN_OFFSET);

	return (
		<span className='relative flex items-center justify-center flex-shrink'>
			<svg
				height={width}
				width={width}
				className='absolute transform -rotate-90'
			>
				<circle
					strokeWidth={strokeWidth}
					stroke='currentColor'
					fill='transparent'
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
			<span className='text-2xl'>{percent * 100}%</span>
		</span>
	);
};

export default ProgressBadge;
