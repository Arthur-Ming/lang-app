import { Route, Routes } from 'react-router';
import WordTickets from '../WordTickets';
import UserWord from './UserWord';
import { useLoadUserWordsQuery } from '@/redux/api/userWords';

const UserWords = () => {
  const { userWords } = useLoadUserWordsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      userWords: data ? Object.values(data) : [],
    }),
  });

  if (!userWords.length)
    return <div className="grow text-center text-2xl text-gray-200">No data</div>;

  return (
    <>
      <WordTickets words={userWords} />
      <Routes>{<Route path={`:wordId`} element={<UserWord />} />}</Routes>
    </>
  );
};

export default UserWords;
