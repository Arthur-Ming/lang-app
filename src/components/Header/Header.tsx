import AuthLink from './AuthLink';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-zinc-900">
      <div className="flex justify-between items-center container">
        <Logo />
        <Navbar />
        <AuthLink />
      </div>
    </header>
  );
};

export default Header;
