import { AuthorizationError } from './appErrors';
import Cookies from 'js-cookie';

const tokenExpire = 0.5;

export const getToken = (): string => {
  const token = Cookies.get('token') || null;
  if (!token) {
    throw new AuthorizationError();
  }
  return token;
};

export const setToken = (token: string | undefined): void => {
  if (token)
    Cookies.set('token', token, {
      expires: tokenExpire,
    });
};
