import classNames from 'classnames';
import { useMatch, useNavigate, useParams } from 'react-router';
import { ReactComponent as LabelIcon } from './label.svg';
import { GROUP_COUNT } from '@/constants';
import clientRoutes from '@/utils/clientRoutes';

const textbookGroups = Array.from(Array(GROUP_COUNT), (_, index) => index + 1);

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
      {textbookGroups.map((group) => (
        <button
          className={classNames(
            'flex flex-col justify-end items-center gap-x-1 py-1 pb-1 relative h-14 bg-section-dark rounded-lg',
            {
              'outline outline-1 outline-highlite': Number(currentGroup) === group,
            }
          )}
          onClick={() => handleGroupClick(group)}
          key={group}
        >
          <LabelIcon
            className={classNames(
              'absolute left-2/4 -translate-x-2/4 -top-0.5 w-6 h-6',
              `text-group-${group}`
            )}
          />
          <span className="text-lg text-gray-200">{`Глава ${group}`}</span>
        </button>
      ))}

      <button
        className={classNames(
          'flex flex-col justify-end items-center gap-x-1 py-1 pb-1 relative h-16 bg-section-dark rounded-lg',
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
