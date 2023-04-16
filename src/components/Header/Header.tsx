import AuthLink from './AuthLink';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="fixed w-full left-0 top-0 z-100 bg-header-dark">
      <div className="flex justify-between items-center container py-1">
        <Logo />
        <Navbar />
        <AuthLink />
      </div>
    </header>
  );
};

export default Header;
