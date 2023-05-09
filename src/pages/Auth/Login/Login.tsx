import { useLoginMutation } from '@/redux/api/auth';
import AuthLayout from '../AuthLayout';
import LoginForm from './LoginForm';
import AuthFooter from '../AuthFooter';

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();

  return (
    <AuthLayout>
      <LoginForm isLoading={isLoading} onSubmit={login} />
      <AuthFooter title="Нет аккаунта?" linkTitle="Зарегистрируйтесь" linkTo="/register" />
    </AuthLayout>
  );
};

export default Login;
