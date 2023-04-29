import useSprintGamePointsSum from '@/hooks/SprintGame/useSprintGamePointsSum';
import { SprintGamePoints as SprintGamePointsType } from '@/types';
import React from 'react';

type Props = {
  gamePoints: SprintGamePointsType[];
  audio: string;
};

const SprintGameHeader = ({ gamePoints, audio }: Props) => {
  const gamePointsSum = useSprintGamePointsSum(gamePoints);
  return (
    <div className="flex justify-center">
      <div className="flex max-w-xs justify-between gap-x-4 text-3xl font-semibold text-gray-200">
        <p className="flex-grow">Ваш результат:</p>
        <p className="flex w-20 justify-end">
          <span> {gamePointsSum}</span>
        </p>
      </div>
    </div>
  );
};
export default React.memo(SprintGameHeader);
