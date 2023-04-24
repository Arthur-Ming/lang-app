import { ReactComponent as AudioIcon } from './audio.svg';
import { ReactComponent as MuteIcon } from './mute.svg';

type Props = {
  isCurrentAudio: boolean;
  onAudioStart?: () => void;
  onAudioStop?: () => void;
  audioClass?: string;
  muteClass?: string;
  buttonClass?: string;
};

const AudioButton = ({
  onAudioStart,
  onAudioStop,
  isCurrentAudio,
  audioClass = 'w-8 h-8',
  muteClass = 'w-8 h-8',
  buttonClass = 'flex item-center justify-center p-1 text-gray-200 hover:text-gray-100',
}: Props) => {
  return isCurrentAudio ? (
    <button
      className={buttonClass}
      onClick={(e) => {
        e.stopPropagation();
        onAudioStop && onAudioStop();
      }}
    >
      <MuteIcon className={muteClass} />
    </button>
  ) : (
    <button
      className={buttonClass}
      onClick={(e) => {
        e.stopPropagation();
        onAudioStart && onAudioStart();
      }}
    >
      <AudioIcon className={audioClass} />
    </button>
  );
};

export default AudioButton;
