import { wordAudioPlay, wordAudioStop } from '@/redux/actions/audio';
import { currentAudioWordIdSelector } from '@/redux/selectors/audio';
import { AppDispatch, RootState } from '@/redux/store';
import { SprintGameAnswer } from '@/types';
import AudioButton from '@components/AudioButton';
import classNames from 'classnames';
import { connect } from 'react-redux';

type OwnProps = {
  answer: SprintGameAnswer;
};

interface StateProps {
  isCurrentAudio: boolean;
}

interface DispatchProps {
  onAudioStart: () => void;
  onAudioStop: () => void;
}

type Props = OwnProps & DispatchProps & StateProps;

const SprintGameResultItem = ({ answer, isCurrentAudio, onAudioStop, onAudioStart }: Props) => {
  return (
    <div
      className={classNames('flex cursor-pointer items-center gap-x-5 p-1 hover:text-gray-100', {
        'text-gray-100': isCurrentAudio,
      })}
      onClick={isCurrentAudio ? onAudioStop : onAudioStart}
    >
      <AudioButton
        isCurrentAudio={isCurrentAudio}
        onAudioStart={onAudioStart}
        onAudioStop={onAudioStop}
        audioClass="w-6 h-6 mt-1"
        muteClass="w-6 h-6 mt-1"
        buttonClass=""
      />
      <div className="flex items-center gap-x-2 text-xl leading-8">
        <p>{answer.word}</p>
        <span>-</span>
        <p>{answer.wordTranslate}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState, { answer }: OwnProps) => ({
  isCurrentAudio: currentAudioWordIdSelector(state) === answer.id,
});

const mapDispatchToProps = (dispatch: AppDispatch, { answer }: OwnProps) => ({
  onAudioStart: () => dispatch(wordAudioPlay(answer.id, answer.audio)),
  onAudioStop: () => dispatch(wordAudioStop()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SprintGameResultItem);
