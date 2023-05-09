import { useRegisterMutation } from '@/redux/api/auth';
import AuthLayout from '../AuthLayout';
import RegisterForm from './RegisterForm';
import AuthFooter from '../AuthFooter';

const Register = () => {
  const [signUp, { isLoading }] = useRegisterMutation();

  return (
    <AuthLayout>
      <RegisterForm isLoading={isLoading} onSubmit={signUp} />
      <AuthFooter title="Уже есть аккаунт?" linkTitle="Войдите" linkTo="/login" />
    </AuthLayout>
  );
};

export default Register;
