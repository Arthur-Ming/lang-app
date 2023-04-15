import useTextbookPageParams from '@/hooks/useTextbookPageParams';
import { useLoadUserWordsQuery } from '@/redux/api/userWords';
import clientRoutes from '@/utils/clientRoutes';
import { useEffect } from 'react';
import { Navigate, useMatch } from 'react-router';

const Textbook = () => {
  const { page, group } = useTextbookPageParams();

  useEffect(() => {
    const syncTextbookParamsToStorage = () => {
      localStorage.setItem('page', String(page));
      localStorage.setItem('group', String(group));
    };
    syncTextbookParamsToStorage();
  }, [page, group]);
  useLoadUserWordsQuery();

  const match = useMatch(`${clientRoutes.textbook.words.absolute()}/*`);
  const match2 = useMatch('textbook/user-words');

  if (!match && !match2) {
    return <Navigate to={clientRoutes.textbook.words.absolute(page, group)} replace />;
  }

  /*   return <TextbookView />;  */
  return <div>Textbook</div>;
};

export default Textbook;
