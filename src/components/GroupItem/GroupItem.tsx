import classNames from 'classnames';
import { ReactComponent as LabelIcon } from './label.svg';

type Props = {
  group: number;
  selectedGroup?: number;
  onSelect: (group: number) => void;
};

const GroupItem = ({ group, selectedGroup, onSelect }: Props) => (
  <button
    className={classNames(
      'relative flex h-14 flex-grow flex-col items-center justify-end gap-x-1 rounded-lg bg-section-dark py-1 pb-1',
      {
        'outline outline-1 outline-highlite': Number(selectedGroup) === group,
      }
    )}
    onClick={() => onSelect(group)}
    key={group}
  >
    <LabelIcon
      className={classNames(
        'absolute -top-0.5 left-2/4 h-6 w-6 -translate-x-2/4',
        /* color */ {
          'text-group-1': group === 1,
          'text-group-2': group === 2,
          'text-group-3': group === 3,
          'text-group-4': group === 4,
          'text-group-5': group === 5,
          'text-group-6': group === 6,
        }
      )}
    />
    <span className="text-lg text-gray-200">{`Глава ${group}`}</span>
  </button>
);

export default GroupItem;
