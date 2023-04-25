import classNames from 'classnames';
import { audioConnector } from '../../../../../utils/audioConnector';

type StateProps = {
  isCurrentAudioPath: boolean;
};

type OwnProps = {
  wordText: string;
  transcription: string;
  wordTranslate: string;
  audio: string;
};

type Props = StateProps & OwnProps;

const WordTranslate = ({ wordText, transcription, wordTranslate, isCurrentAudioPath }: Props) => {
  return (
    <h3
      className={classNames('text-2xl', {
        'text-gray-100': isCurrentAudioPath,
      })}
    >{`${wordText} - ${transcription} - ${wordTranslate}`}</h3>
  );
};

export default audioConnector(WordTranslate);
