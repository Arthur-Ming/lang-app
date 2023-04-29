import classNames from 'classnames';
import { memo } from 'react';

const CIRCLE_RADIUS = 45;

type Props = {
  pause: boolean;
  strokeDasharray: string;
  circleColor: string;
  time: string;
};

const CircleTimer = ({ pause, strokeDasharray, circleColor, time }: Props) => {
  return (
    <div
      className={classNames('absolute left-5 top-14 h-48 w-48', {
        'opacity-30': pause,
      })}
    >
      <svg className="-scale-x-100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="fill-none stroke-none">
          <circle
            style={{
              strokeWidth: '7px',
              stroke: 'grey',
            }}
            cx="50"
            cy="50"
            r={CIRCLE_RADIUS}
          ></circle>
          <path
            strokeDasharray={strokeDasharray}
            className={classNames('', '')}
            style={{
              color: circleColor,
              strokeWidth: '7px',
              strokeLinecap: 'round',
              transform: 'rotate(90deg)',
              transformOrigin: 'center',
              transition: '1s linear all',
              fillRule: 'nonzero',
              stroke: 'currentColor',
            }}
            d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
          ></path>
        </g>
      </svg>
      <span className="absolute top-0 flex h-full w-full items-center justify-center text-5xl text-gray-200">
        {time}
      </span>
    </div>
  );
};
export default memo(CircleTimer);
