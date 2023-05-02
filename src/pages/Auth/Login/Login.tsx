import { useLoginMutation } from '@/redux/api/auth';
import AuthLayout from '../AuthLayout';
import LoginForm from './LoginForm';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();

  return (
    <AuthLayout>
      <LoginForm isLoading={isLoading} onSubmit={login} />
      <div className="m-8 flex justify-center gap-x-2 gap-y-2">
        <span className="text-xl text-gray-200">Нет аккаунта?</span>
        <NavLink className="text-xl text-blue-100" to="/register">
          Зарегистрируйтесь
        </NavLink>
      </div>
    </AuthLayout>
  );
};

export default Login;
