import { NavLink } from 'react-router-dom';
import { ReactComponent as TextbookIcon } from './textbook.svg';
import { ReactComponent as StatisticsIcon } from './statistics.svg';
import { ReactComponent as GamesIcon } from './games.svg';
import classNames from 'classnames';

const links = [
  {
    link: 'textbook',
    icon: TextbookIcon,
  },
  {
    link: 'games',
    icon: GamesIcon,
  },
  {
    link: 'statistics',
    icon: StatisticsIcon,
  },
];

const NavBar = () => (
  <nav className="pt-2 pb-2">
    <ul className="flex gap-x-10">
      {links.map(({ link, icon: Icon }) => (
        <li key={link}>
          <NavLink
            to={`/${link}`}
            className={({ isActive }) =>
              classNames('flex gap-x-2 hover:opacity-80 ease-linear duration-200', {
                ' text-zinc-300': !isActive,
                'text-orange-500': isActive,
              })
            }
          >
            <Icon className="w-8 h-8" />
            <span className="text-lg">{link}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
