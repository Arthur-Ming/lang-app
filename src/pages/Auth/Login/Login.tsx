import { useGetUserQuery, useLoginMutation } from '@/redux/api/auth';
import AuthLayout from '../AuthLayout';
import LoginForm from './LoginForm';
import AuthFooter from '../AuthFooter';
import { Navigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {
  const { data: loggedUser } = useGetUserQuery();
  const [login, { isLoading, isSuccess }] = useLoginMutation();

  if (isSuccess) {
    toast.success('success', {
      toastId: '',
    });
  }

  if (loggedUser) return <Navigate to="/" />;

  return (
    <AuthLayout>
      <LoginForm isLoading={isLoading} onSubmit={login} />
      <AuthFooter title="Нет аккаунта?" linkTitle="Зарегистрируйтесь" linkTo="/register" />
    </AuthLayout>
  );
};

export default Login;
