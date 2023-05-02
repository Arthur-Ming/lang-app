import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '@components/Footer';
import Header from '@components/Header';
import AppRoutes from './AppRoutes';
import { useGetUserQuery } from '@/redux/api/auth';

const App = () => {
  useGetUserQuery();
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-main-dark">
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
