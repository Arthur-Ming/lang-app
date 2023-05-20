import { useGetUserQuery, useLoginMutation, useRegisterMutation } from '@/redux/api/auth';
import AuthLayout from '../AuthLayout';
import RegisterForm from './RegisterForm';
import AuthFooter from '../AuthFooter';
import { IRegistrationBody } from '@/types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router';

const Register = () => {
  const { data: loggedUser } = useGetUserQuery();
  const [registerBody, setRegisterBody] = useState<IRegistrationBody | undefined>();
  const [register, { isLoading: isRegisterLoading, isSuccess: isRegisterSuccess }] =
    useRegisterMutation();

  const [login, { isLoading: isLoginLoading, isSuccess: isLoginSuccess }] = useLoginMutation();

  useEffect(() => {
    if (isRegisterSuccess && registerBody) {
      const { email, password } = registerBody;
      login({ email, password });
    }
  }, [isRegisterSuccess, registerBody, login]);

  if (isLoginSuccess) {
    toast.success('Login', {
      toastId: 'Login',
    });
  }
  if (isRegisterSuccess) {
    toast.success('Register', {
      toastId: 'Register',
    });
  }

  if (loggedUser) return <Navigate to="/" />;

  const onSubmit = (body: IRegistrationBody) => {
    setRegisterBody(body);
    register(body);
  };

  return (
    <AuthLayout>
      <RegisterForm isLoading={isRegisterLoading || isLoginLoading} onSubmit={onSubmit} />
      <AuthFooter title="Уже есть аккаунт?" linkTitle="Войдите" linkTo="/login" />
    </AuthLayout>
  );
};

export default Register;
