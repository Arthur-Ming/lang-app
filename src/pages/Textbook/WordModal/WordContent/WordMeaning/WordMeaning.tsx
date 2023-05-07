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
    <div
      className={classNames({
        'text-gray-100': isCurrentAudioPath,
      })}
    >
      <h4 className="text-center" dangerouslySetInnerHTML={{ __html: textMeaning }}></h4>
      <h4 className="text-center">{textMeaningTranslate}</h4>
    </div>
  );
};

export default audioConnector(WordMeaning);
