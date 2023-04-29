import useSprintGame from '@/hooks/SprintGame/useSprintGame';
import useSprintGameTimer from '@/hooks/SprintGame/useSprintGameTimer';
import CircleTimer from '@components/CircleTimer';
import SprintGameHeader from './SprintGameHeader';
import SprintGameDots from './SprintGameDots';
import SprintGamePoints from './SprintGamePoints';
import SprintGameButtons from './SprintGameButtons';
import SprintGameWords from './SprintGameWords';
import Sprint from '../Sprint';
import { getResult } from './helpers';

interface OwnProps {
  group: number;
  pageRange: number[];
}

type Props = OwnProps;

const SprintGame = ({ group, pageRange }: Props) => {
  const {
    sprintStep,
    wordsLoading,
    wordsLoaded,
    wordsLoadingError,
    onAnswerButtonClick,
    pagesOver,
    gamePoints,
    numberOfContinuousAnswers,
    answers,
  }: any = useSprintGame(group, pageRange);
  const timer = useSprintGameTimer(wordsLoaded);

  if (pagesOver || timer.isTimeOver) {
    const gameResult = getResult(answers, gamePoints);
    return <Sprint results={gameResult} />;
  }

  return (
    <main className="flex-grow">
      <div className="relative flex justify-center">
        <CircleTimer pause={timer.isPause} onTimeOver={timer.onTimeOver} />
        <div className="mt-24 flex w-[600px] flex-col gap-y-5 px-5">
          <SprintGameHeader gamePoints={gamePoints} audio={''} />
          <SprintGameDots
            numberOfContinuousCorrectAnswers={numberOfContinuousAnswers.correct}
            numberOfContinuousWrongAnswers={numberOfContinuousAnswers.wrong}
          />
          <div className="mb-8 flex flex-col items-center gap-y-4">
            {wordsLoading && <div>Loading...</div>}
            {sprintStep && (
              <SprintGameWords
                word={sprintStep.word}
                mockWordTranslate={sprintStep.mockTranslate}
              />
            )}
          </div>
          <SprintGameButtons onAnswerButtonClick={onAnswerButtonClick} disabled={wordsLoading} />
        </div>
        <SprintGamePoints gamePoints={gamePoints} />
      </div>
    </main>
  );
};

export default SprintGame;
