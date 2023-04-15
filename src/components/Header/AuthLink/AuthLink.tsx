import { ReactComponent as UserIcon } from './user.svg';
import { NavLink } from 'react-router-dom';

type StateProps = {
  userName?: string | null;
  isAuth?: boolean;
};

type Props = StateProps;

const AuthLink = ({ userName = 'dbdbf', isAuth = false }: Props) => {
  /*  if (isAuth)
    return (
      <span className="flex gap-x-5">
        {userName && <span>{userName}</span>}
        <UserIcon />
      </span>
    ); */

  return (
    <NavLink to={`/login`} className="flex gap-x-5 items-center text-zinc-300">
      <span className="text-lg">войти</span>
      <UserIcon className="w-6 h-6" />
    </NavLink>
  );
};

export default AuthLink;
