import { Routes, Route } from 'react-router';
import Main from '@pages/Main';
import Textbook from '@pages/Textbook';
import clientRoutes from '@/utils/clientRoutes';
import TextbookWords from '@pages/Textbook/TextbookWords';
import TextbookWord from '@pages/Textbook/TextbookWords/TextbookWord';
import Games from '@pages/Games';
import Sprint from '@pages/Games/Sprint';
import Login from '@pages/Auth/Login';
import Register from '@pages/Auth/Register';
import UserWords from '@pages/Textbook/UserWords';
import UserWord from '@pages/Textbook/UserWords/UserWord';

const AppRoutes = () => (
  <Routes>
    <Route index element={<Main />} />
    <Route path={`${clientRoutes.textbook.absolute()}/*`} element={<Textbook />}>
      <Route path={`${clientRoutes.textbook.words.relative()}/*`} element={<TextbookWords />}>
        <Route path={`:wordId`} element={<TextbookWord />} />
      </Route>
      <Route path={`user-words/*`} element={<UserWords />}>
        <Route path={`:wordId`} element={<UserWord />} />
      </Route>
    </Route>
    <Route path={`${clientRoutes.games.absolute()}/*`} element={<Games />}>
      <Route path="sprint" element={<Sprint />} />
      {/*  <Route path="audiochallenge" element={<AudioChallenge />} />  */}
    </Route>
    <Route path={`login`} element={<Login />} />
    <Route path={`register`} element={<Register />} />
  </Routes>
);

export default AppRoutes;
