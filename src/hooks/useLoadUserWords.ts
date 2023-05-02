import { useGetUserQuery } from '@/redux/api/auth';
import { useLazyLoadUserWordsQuery, useLoadUserWordsQuery } from '@/redux/api/userWords';
import { useEffect } from 'react';

const useLoadUserWords = () => {
  const { data, error } = useLoadUserWordsQuery();

  console.log(data);
  console.log(error);
};

export default useLoadUserWords;
