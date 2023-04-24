import classNames from 'classnames';
import { useMatch, useNavigate, useParams } from 'react-router';
import { ReactComponent as LabelIcon } from './label.svg';
import { GROUP_COUNT } from '@/constants';
import clientRoutes from '@/utils/clientRoutes';

const textbookGroups = Array.from(Array(GROUP_COUNT), (_, index) => ({
  group: index + 1,
  color: `text-group-${index + 1}`,
}));

const TextbookGroupsPagination = () => {
  const { page = 1, group: currentGroup } = useParams(); // fix: page from localStor
  const navigate = useNavigate();
  const isUserWords = useMatch('textbook/user-words');
  const handleGroupClick = (group: number) => {
    navigate(clientRoutes.textbook.words.relative(page, group));
  };

  const handleHardWords = () => {
    navigate('user-words');
  };

  return (
    <div className="flex flex-col gap-y-1 overflow-hidden px-1 py-1">
      {textbookGroups.map(({ group, color }) => (
        <button
          className={classNames(
            'relative flex h-14 flex-col items-center justify-end gap-x-1 rounded-lg bg-section-dark py-1 pb-1',
            {
              'outline outline-1 outline-highlite': Number(currentGroup) === group,
            }
          )}
          onClick={() => handleGroupClick(group)}
          key={group}
        >
          <LabelIcon
            className={classNames(
              'absolute -top-0.5 left-2/4 h-6 w-6 -translate-x-2/4',
              color /* {
              'text-group-1': group === 1,
              'text-group-2': group === 2,
              'text-group-3': group === 3,
              'text-group-4': group === 4,
              'text-group-5': group === 5,
              'text-group-6': group === 6,
            } */
            )}
          />
          <span className="text-lg text-gray-200">{`Глава ${group}`}</span>
        </button>
      ))}

      <button
        className={classNames(
          'relative flex h-16 flex-col items-center justify-end gap-x-1 rounded-lg bg-section-dark py-1 pb-1',
          {
            'outline outline-1 outline-highlite': isUserWords,
          }
        )}
        onClick={handleHardWords}
      >
        <span className="text-lg text-gray-200">{`Сложные слова`}</span>
      </button>
    </div>
  );
};

export default TextbookGroupsPagination;
