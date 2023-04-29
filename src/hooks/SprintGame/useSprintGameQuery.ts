import { useLazyLoadWordsQuery } from '@/redux/api/words';
import { useEffect } from 'react';

const useSprintGameQuery = (page: null | number, level: number) => {
  const [getWords, { isLoading, isFetching, isSuccess, error, data: words }] =
    useLazyLoadWordsQuery();

  useEffect(() => {
    if (page !== null) {
      getWords({
        page: Number(page) - 1,
        group: Number(level) - 1,
      });
    }
  }, [getWords, level, page]);

  return {
    wordsLoading: isLoading || isFetching,
    wordsLoaded: isSuccess,
    wordsLoadingError: error,
    words,
  };
};

export default useSprintGameQuery;
