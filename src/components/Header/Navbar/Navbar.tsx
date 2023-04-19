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
  <nav>
    <ul className="flex gap-x-10">
      {links.map(({ link, icon: Icon }) => (
        <li key={link}>
          <NavLink
            to={`/${link}`}
            className={({ isActive }) =>
              classNames('relative flex gap-x-2 hover:opacity-80 ease-linear duration-200', {
                'text-gray-200': !isActive,
                'text-gray-100 after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-highlite after:top-8':
                  isActive,
              })
            }
          >
            <Icon className="w-8 h-8" />
            <span className="text-lg">{link}</span>
            {/*  <span className="absolute w-full bg-high"></span> */}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
