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
  return <h3>{`${wordText} - ${transcription} - ${wordTranslate}`}</h3>;
};

export default audioConnector(WordTranslate);
