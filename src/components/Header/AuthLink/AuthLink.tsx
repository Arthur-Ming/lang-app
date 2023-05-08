import { useGetUserQuery } from '@/redux/api/auth';
import { ReactComponent as UserIcon } from './user.svg';
import { NavLink } from 'react-router-dom';
import { api } from '@/redux/api';

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
  // const { data: user } = getUser.useQueryState();

  const { data: user } = useGetUserQuery();

  return (
    <NavLink to={`/login`} className="text-zinc-300 flex items-center gap-x-5">
      {user && user.name && <span className="text-lg">{user.name}</span>}
      {!user && <span className="text-lg">войти</span>}

      <UserIcon className="h-6 w-6" />
    </NavLink>
  );
};

export default AuthLink;
