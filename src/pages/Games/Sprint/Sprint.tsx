import useTextbookPageParams from '@/hooks/useTextbookPageParams';
import { ISprintResult } from '@/types';
import { useState } from 'react';
import SprintEntry from './SprintEntry';

type Props = {
  results?: ISprintResult[];
};

const Sprint = ({ results }: Props) => {
  const { group, page } = useTextbookPageParams();
  const [selectedGroup, setSelectedGroup] = useState(group);
  const [pageRange, setPageRange] = useState([1, page]);
  const [isGame, setIsGame] = useState(false);
  const [isShowResult, setShowResult] = useState(Boolean(results));

  /* if (isGame) return <SprintGame group={selectedGroup} pageRange={pageRange} />; */

  const onPlay = () => {
    setIsGame(true);
  };

  return (
    <>
      <SprintEntry
        onPlay={onPlay}
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
        pageRange={pageRange}
        setPageRange={setPageRange}
      />
      {results &&
        isShowResult &&
        {
          /* <SprintResultModal results={results} onClose={() => setShowResult(false)} onPlay={onPlay} /> */
        }}
    </>
  );
};

export default Sprint;
