import { useGetUserQuery, useLoginMutation } from '@/redux/api/auth';
import AuthLayout from '../AuthLayout';
import LoginForm from './LoginForm';
import AuthFooter from '../AuthFooter';
import { Navigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {
  const { data: loggedUser } = useGetUserQuery();
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();

  if (isSuccess) {
    toast.success('success', {
      toastId: '',
    });
  }
  if (isError) {
    toast.error('Неверные учетные данные', {
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
