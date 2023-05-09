import { AuthorizationError } from './appErrors';
import Cookies from 'js-cookie';

export const getToken = (): string => {
  const token = Cookies.get('token') || null;
  if (!token) {
    throw new AuthorizationError();
  }
  return token;
};
