import { useRegisterUserMutation } from '@/redux/api/users';
import AuthLayout from '../AuthLayout';
import RegisterForm from './RegisterForm';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const [signUp, { isLoading }] = useRegisterUserMutation();

  return (
    <AuthLayout>
      <RegisterForm isLoading={isLoading} onSubmit={signUp} />
      <div className="m-8 flex justify-center gap-x-2 gap-y-2">
        <span className="text-xl text-gray-200">Уже есть аккаунт?</span>
        <NavLink className="text-xl text-blue-100" to="/login">
          Войдите
        </NavLink>
      </div>
    </AuthLayout>
  );
};

export default Register;
