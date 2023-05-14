import { useLoadWordsQuery } from '@/redux/api/words';
import Loader from '@components/Loader';
import { Route, Routes, useParams } from 'react-router';
import WordTickets from '../WordTickets';
import TextbookWord from './TextbookWord';

const TextbookWords = () => {
  const { page, group, wordId } = useParams();
  const {
    isLoading,
    isFetching,
    isError,
    data: words,
  } = useLoadWordsQuery({
    page: Number(page) - 1,
    group: Number(group) - 1,
  });

  if (isLoading || isFetching) return <Loader />;
  if (isError)
    return <div className="grow text-center text-3xl text-gray-200">Something went wrong!</div>;
  return (
    <>
      {words && <WordTickets words={words} />}
      <Routes>{wordId && <Route path={`:wordId`} element={<TextbookWord />} />}</Routes>
    </>
  );
};

export default TextbookWords;
