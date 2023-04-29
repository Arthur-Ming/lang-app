import classNames from 'classnames';
import React, { memo } from 'react';

const dotsArr = Array.from(Array(3), (_, index) => ({
  dotId: index + 1,
}));

type Props = {
  numberOfContinuousCorrectAnswers: number;
  numberOfContinuousWrongAnswers: number;
};

const SprintGameDots = ({
  numberOfContinuousCorrectAnswers,
  numberOfContinuousWrongAnswers,
}: Props) => (
  <div className="flex justify-center gap-x-5">
    {dotsArr.map(({ dotId }) => (
      <div
        key={dotId}
        className={classNames('h-3 w-3 rounded-full bg-gray-200', {
          'bg-success': dotId <= numberOfContinuousCorrectAnswers,
          'bg-fail': dotId <= numberOfContinuousWrongAnswers,
        })}
      ></div>
    ))}
  </div>
);

export default memo(SprintGameDots);
