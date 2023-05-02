import classNames from 'classnames';
import { useMatch, useNavigate, useParams } from 'react-router';
import { GROUP_COUNT } from '@/constants';
import clientRoutes from '@/utils/clientRoutes';
import GroupItem from '@components/GroupItem/GroupItem';

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
        <GroupItem
          key={group}
          onSelect={handleGroupClick}
          group={group}
          selectedGroup={Number(currentGroup)}
        />
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
