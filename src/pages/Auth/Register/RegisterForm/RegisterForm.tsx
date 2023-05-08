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
            'h-10 rounded-lg border-x border-y border-gray-200 bg-section-dark px-5 py-6 text-xl text-gray-200 outline-none placeholder:opacity-30 focus:border-blue-100',
            {
              'border-fail focus:border-fail': errors.email,
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
            'h-10 rounded-lg border-x border-y border-gray-200 bg-section-dark px-5 py-6 text-xl text-gray-200 outline-none placeholder:opacity-30 focus:border-blue-100',
            {
              'border-fail focus:border-fail': errors.name,
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
            'h-10 rounded-lg border-x border-y border-gray-200 bg-section-dark px-5 py-6 text-xl text-gray-200 outline-none placeholder:opacity-30 focus:border-blue-100',
            {
              'border-fail focus:border-fail': errors.password,
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
        className="mt-5 h-11 min-w-[208px] cursor-pointer rounded-lg bg-blue-200 px-6 text-lg font-semibold text-gray-100 duration-200 hover:bg-blue-100"
        onClick={handleSubmit(onSubmit)}
        type="submit"
        value="Зарегистрироваться"
        disabled={isLoading}
      />
    </form>
  );
};

export default RegisterForm;
