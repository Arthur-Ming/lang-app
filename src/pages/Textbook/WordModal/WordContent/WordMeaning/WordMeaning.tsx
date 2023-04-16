import classNames from 'classnames';
import { audioConnector } from '@utils/audioConnector';

type StateProps = {
  isCurrentAudioPath: boolean;
};

type OwnProps = {
  textMeaning: string;
  textMeaningTranslate: string;
  audio: string;
};

type Props = StateProps & OwnProps;

const WordMeaning = ({ textMeaning, textMeaningTranslate, isCurrentAudioPath }: Props) => {
  return (
    <div>
      <h4 dangerouslySetInnerHTML={{ __html: textMeaning }}></h4>
      <h4>{textMeaningTranslate}</h4>
    </div>
  );
};

export default audioConnector(WordMeaning);
