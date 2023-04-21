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
              classNames('relative flex gap-x-2 duration-200 ease-linear hover:opacity-80', {
                'text-gray-200': !isActive,
                'text-gray-100 after:absolute after:top-8 after:h-0.5 after:w-full after:bg-highlite after:content-[""]':
                  isActive,
              })
            }
          >
            <Icon className="h-8 w-8" />
            <span className="text-lg">{link}</span>
            {/*  <span className="absolute w-full bg-high"></span> */}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
