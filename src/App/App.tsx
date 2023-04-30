import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Main from '@pages/Main';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Textbook from '@pages/Textbook';
import clientRoutes from '@/utils/clientRoutes';
import TextbookWords from '@pages/Textbook/TextbookWords';
import TextbookWord from '@pages/Textbook/TextbookWords/TextbookWord';
import Games from '@pages/Games';
import Sprint from '@pages/Games/Sprint';
import Login from '@pages/Auth/Login';

const App = () => (
  <div className="relative flex min-h-screen w-full flex-col bg-main-dark">
    <Router>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path={`${clientRoutes.textbook.absolute()}/*`} element={<Textbook />}>
          <Route path={`${clientRoutes.textbook.words.relative()}/*`} element={<TextbookWords />}>
            <Route path={`:wordId`} element={<TextbookWord />} />
          </Route>
        </Route>
        <Route path={`${clientRoutes.games.absolute()}/*`} element={<Games />}>
          <Route path="sprint" element={<Sprint />} />
          {/*  <Route path="audiochallenge" element={<AudioChallenge />} />  */}
        </Route>
        <Route path={`login`} element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
