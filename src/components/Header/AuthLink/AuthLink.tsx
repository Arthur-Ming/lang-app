import { useGetUserQuery } from '@/redux/api/auth';
import { ReactComponent as UserIcon } from './user.svg';
import { NavLink } from 'react-router-dom';

const AuthLink = () => {
  const { data: loggedUser } = useGetUserQuery();

  if (loggedUser)
    return (
      <div className="flex items-center gap-x-5 text-gray-200">
        <span className="text-lg">{loggedUser.name}</span>
        <UserIcon className="h-6 w-6" />
      </div>
    );

  return (
    <NavLink to={`/login`} className="flex items-center gap-x-5 text-gray-200">
      <span className="text-lg">войти</span>
      <UserIcon className="h-6 w-6" />
    </NavLink>
  );
};

export default AuthLink;
