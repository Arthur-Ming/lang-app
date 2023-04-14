import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Main from '@pages/Main';
import Header from '@components/Header';
import Footer from '@components/Footer';

const App = () => (
  <div className="relative min-h-screen w-full flex flex-col bg-zinc-900">
    <Header />
    <Router>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </Router>
    <Footer />
  </div>
);

export default App;
