import { getTrackBackground, Range } from 'react-range';
import classNames from 'classnames';
import { RANGE_PAGE } from '../../constants';

const STEP = 1;
const MIN = RANGE_PAGE[0];
const MAX = RANGE_PAGE[1];

type Props = {
  values: number[];
  setValues: (values: number[]) => void;
};

const PageRange = ({ values, setValues }: Props) => {
  return (
    <div className="ml-2 flex w-full flex-wrap justify-between">
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={setValues}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="flex h-9  w-full"
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#ffffff75', '#0079bf', '#ffffff75'],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            className={classNames(
              'flex h-10 w-4 items-center justify-center rounded bg-gray-200  hover:bg-gray-100',
              {
                'bg-gray-100': isDragged,
              }
            )}
          >
            <div
              className={classNames('absolute -top-7 p-1 text-sm', {
                'text-gray-100': isDragged,
              })}
            >
              {values[index]}
            </div>
            <div className="h-4 w-1" />
          </div>
        )}
      />
    </div>
  );
};

export default PageRange;
