import classNames from 'classnames';
import { ReactComponent as LabelIcon } from './label.svg';
import { GROUP_COUNT } from '@/constants';
import PageRange from '@components/PageRange';
import GroupPicker from '@components/GroupPicker';

const groups = Array.from(Array(GROUP_COUNT), (_, index) => index + 1);

type Props = {
  selectedGroup: number;
  pageRange: number[];
  onPlay: () => void;
  setSelectedGroup: (group: number) => void;
  setPageRange: (range: number[]) => void;
};

const SprintEntry = ({
  onPlay,
  selectedGroup,
  setSelectedGroup,
  pageRange,
  setPageRange,
}: Props) => (
  <main className=" flex-grow">
    <div className="container my-8 flex max-w-2xl flex-col gap-y-5 px-5 py-10 text-lg font-semibold text-gray-200">
      <h4 className="text-center text-3xl font-bold">Спринт</h4>
      <h5 className="text-xl font-bold">Попробуйте перевести как можно больше слов за 60 секунд</h5>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-4">
          <p>Выберите главу:</p>
          <GroupPicker groups={groups} selectedGroup={selectedGroup} onSelect={setSelectedGroup} />
        </div>
        <div className="flex w-2/4 flex-col gap-y-8">
          <p>Выберите диапазон страниц:</p>
          <PageRange values={pageRange} setValues={setPageRange} />
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="flex items-center gap-x-1">
            группа {selectedGroup}
            <LabelIcon
              className={classNames('h-6 w-6', {
                'text-group-1': selectedGroup === 1,
                'text-group-2': selectedGroup === 2,
                'text-group-3': selectedGroup === 3,
                'text-group-4': selectedGroup === 4,
                'text-group-5': selectedGroup === 5,
                'text-group-6': selectedGroup === 6,
              })}
            />
          </p>
          <p>cтраницы {`${pageRange[0]} - ${pageRange[1]}`}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="h-8 w-28 rounded-md bg-blue-100 text-gray-100 duration-200 hover:bg-blue-200"
          onClick={onPlay}
        >
          <span className="text-base font-normal">Начать</span>
        </button>
      </div>
    </div>
  </main>
);

export default SprintEntry;
