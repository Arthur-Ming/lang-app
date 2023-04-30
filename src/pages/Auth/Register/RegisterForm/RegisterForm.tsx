import { IRegistrationBody } from '@/types';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

type Inputs = IRegistrationBody;

type Props = {
  onSubmit: (body: IRegistrationBody) => void;
  isLoading: boolean;
};

const RegisterForm = ({ isLoading, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur' });
  return (
    <form className="flex flex-col items-center gap-y-4">
      <label className="relative flex w-full flex-col gap-y-2">
        <span className="text-xl text-gray-200">Email</span>
        <input
          type="email"
          autoFocus
          autoComplete="off"
          placeholder="email"
          className={classNames(
            'h-10 rounded-lg border-2 border-gray-200 bg-gray-100 px-5 py-6 text-xl outline-none focus:border-2 focus:border-blue-100',
            {
              'border-fail': errors.email,
            }
          )}
          {...register('email', {
            required: 'this field is required!',
          })}
        />
        {errors.email && (
          <span className="absolute -bottom-5 left-2 text-xs text-fail">
            {errors.email.message}
          </span>
        )}
      </label>
      <label className="relative flex w-full flex-col gap-y-2">
        <span className="text-xl text-gray-200">Имя</span>
        <input
          type="text"
          placeholder="name"
          className={classNames(
            'h-10 rounded-lg border-2 border-gray-200 bg-gray-100 px-5 py-6 text-xl outline-none focus:border-2 focus:border-blue-100',
            {
              'border-fail': errors.email,
            }
          )}
          {...register('name', {
            required: 'this field is required!',
          })}
        />
        {errors.name && (
          <span className="absolute -bottom-5 left-2 text-xs text-fail">{errors.name.message}</span>
        )}
      </label>
      <label className="relative flex w-full flex-col gap-y-2">
        <span className="text-xl text-gray-200">Пароль</span>
        <input
          type="password"
          placeholder="password"
          className={classNames(
            'h-10 rounded-lg border-2 border-gray-200 bg-gray-100 px-5 py-6 text-xl outline-none focus:border-2 focus:border-blue-100',
            {
              'border-fail': errors.email,
            }
          )}
          {...register('password', {
            required: 'this field is required!',
            minLength: {
              value: 5,
              message: 'minimum 5 characters',
            },
          })}
        />
        {errors.password && (
          <span className="absolute -bottom-5 left-2 text-xs text-fail">
            {errors.password.message || 'Error!'}
          </span>
        )}
      </label>
      <input
        className="mb-5 mt-5 h-11 w-52 cursor-pointer rounded-lg bg-blue-200 text-lg font-semibold text-gray-100 duration-200 hover:bg-blue-100"
        onClick={handleSubmit(onSubmit)}
        type="submit"
        value="Войти"
        disabled={isLoading}
      />
    </form>
  );
};

export default RegisterForm;
