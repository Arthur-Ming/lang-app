import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Main from '@pages/Main';
import Header from '@components/Header';
import Footer from '@components/Footer';

const App = () => (
  <div className="relative min-h-screen w-full flex flex-col bg-zinc-800">
    <Router>
      <Header />
      <Routes>
        <Route index element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
