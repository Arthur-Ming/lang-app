import classNames from 'classnames';
import { audioConnector } from '@utils/audioConnector';

type StateProps = {
  isCurrentAudioPath: boolean;
};

type OwnProps = {
  textExample: string;
  textExampleTranslate: string;
  audio: string;
};

type Props = StateProps & OwnProps;

const WordExample = ({ textExample, textExampleTranslate, isCurrentAudioPath }: Props) => {
  return (
    <div
      className={classNames({
        'text-gray-100': isCurrentAudioPath,
      })}
    >
      <h4 className="text-center" dangerouslySetInnerHTML={{ __html: textExample }}></h4>
      <h4 className="text-center">{textExampleTranslate}</h4>
    </div>
  );
};

export default audioConnector(WordExample);
