import { ISprintResult, SprintGameAnswer } from '@/types';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import GameResultSection from './GameResultSection';

type Props = {
  results: ISprintResult[];
};

const SprintGameResult = ({ results }: Props) => {
  const [trueAnswers, setTrueAnswers] = useState<SprintGameAnswer[]>([]);
  const [falseAnswers, setFalseAnswers] = useState<SprintGameAnswer[]>([]);
  const [pointsSum, setPointsSum] = useState<number>(0);

  useEffect(() => {
    if (results.length) {
      setTrueAnswers(results.filter(({ isCorrectAnswer }) => isCorrectAnswer));
      setFalseAnswers(results.filter(({ isCorrectAnswer }) => !isCorrectAnswer));
      setPointsSum(results.reduce((sum: number, result) => sum + result.points, 0));
    }
  }, [results]);

  return (
    <div className="flex flex-col gap-y-5 px-14 pb-3 text-gray-200">
      <div className="flex justify-center gap-x-4">
        <h4 className="text-2xl">Результаты</h4>
        <span
          className={classNames('text-3xl', {
            'text-success': pointsSum > 0,
            'text-fail': pointsSum < 0,
          })}
        >
          {pointsSum}
        </span>
      </div>
      <div className="flex flex-wrap justify-between gap-x-5">
        <GameResultSection filtredAnswers={falseAnswers} isTrueAnswers={false} />
        <GameResultSection filtredAnswers={trueAnswers} isTrueAnswers={true} />
      </div>
    </div>
  );
};

export default SprintGameResult;
