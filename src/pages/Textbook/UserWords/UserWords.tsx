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

  return (
    <>
      <WordTickets words={userWords} />
      <Routes>{<Route path={`:wordId`} element={<UserWord />} />}</Routes>
    </>
  );
};

export default UserWords;
