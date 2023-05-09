import { NavLink } from 'react-router-dom';

type Props = {
  title: string;
  linkTitle: string;
  linkTo: string;
};

const AuthFooter = ({ title, linkTitle, linkTo }: Props) => (
  <div className="m-8 flex justify-center gap-x-2 gap-y-2">
    <span className="text-xl text-gray-200">{title}</span>
    <NavLink className="text-xl text-blue-100" to={linkTo}>
      {linkTitle}
    </NavLink>
  </div>
);

export default AuthFooter;
