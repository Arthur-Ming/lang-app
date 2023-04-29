import classNames from 'classnames';
import React, { memo } from 'react';
import { SprintGamePoints as SprintGamePointsType } from '@/types';

type Props = {
  gamePoints: SprintGamePointsType[];
};

const pointsArr = Array.from(Array(5), (_, index) => ({
  id: index + 1,
}));

const SprintGamePoints = ({ gamePoints }: Props) => (
  <div className="absolute right-16 top-24 flex flex-col gap-y-2">
    {pointsArr.map(({ id }) => {
      if (gamePoints.length < id) return <div key={id}></div>;
      const point = gamePoints[gamePoints.length - id];
      return (
        <div
          key={id}
          className={classNames('flex justify-end gap-1 text-3xl font-semibold text-gray-200', {
            'text-success': point > 0,
            'text-fail': point < 0,
            'text-7xl opacity-100': id === 1,
            'opacity-30': id !== 1,
          })}
        >
          {point > 0 && <span className="">+</span>}
          {point < 0 && <span className="">-</span>}
          {<span>{Math.abs(point)}</span>}
        </div>
      );
    })}
  </div>
);

export default memo(SprintGamePoints);
