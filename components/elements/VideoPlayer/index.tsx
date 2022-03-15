import ReactPlayer from 'react-player/youtube';

interface IVideoPlayerProps {
  videoUrl: string;
}

export const VideoPlayer: React.FC<IVideoPlayerProps> = ({ videoUrl }) => {
  return (
    <div className='flex items-center justify-center'>
      <ReactPlayer url={videoUrl} playing={false} controls={true} />
    </div>
  );
};
