import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Main from '@pages/Main';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Textbook from '@pages/Textbook';
import clientRoutes from '@/utils/clientRoutes';
import TextbookWords from '@pages/Textbook/TextbookWords';
import TextbookWord from '@pages/Textbook/TextbookWords/TextbookWord';

const App = () => (
  <div className="relative min-h-screen w-full flex flex-col bg-main-dark">
    <Router>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path={`${clientRoutes.textbook.absolute()}/*`} element={<Textbook />}>
          <Route path={`${clientRoutes.textbook.words.relative()}/*`} element={<TextbookWords />}>
            <Route path={`:wordId`} element={<TextbookWord />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
