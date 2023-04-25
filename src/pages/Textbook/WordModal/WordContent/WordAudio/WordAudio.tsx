import { connect } from 'react-redux';
import AudioButton from '@components/AudioButton';
import { AppDispatch, RootState } from '@/redux/store';
import { currentAudioWordIdSelector } from '@/redux/selectors/audio';
import { wordAudioStop, wordFullAudioPlay } from '@/redux/actions/audio';

interface OwnProps {
  wordId: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
}

interface StateProps {
  isCurrentAudio: boolean;
}

interface DispatchProps {
  onAudioStart: () => void;
  onAudioStop: () => void;
}

type Props = OwnProps & DispatchProps & StateProps;

const WordAudio = ({ isCurrentAudio, onAudioStart, onAudioStop }: Props) => {
  return (
    <AudioButton
      isCurrentAudio={isCurrentAudio}
      onAudioStart={onAudioStart}
      onAudioStop={onAudioStop}
    />
  );
};

const mapStateToProps = (state: RootState, { wordId }: OwnProps) => ({
  isCurrentAudio: currentAudioWordIdSelector(state) === wordId,
});

const mapDispatchToProps = (dispatch: AppDispatch, ownProps: OwnProps) => ({
  onAudioStart: () => dispatch(wordFullAudioPlay(ownProps)),
  onAudioStop: () => dispatch(wordAudioStop()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WordAudio);
