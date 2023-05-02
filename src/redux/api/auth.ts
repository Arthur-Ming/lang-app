import Cookies from 'js-cookie';
import { api } from '.';
import { ILoginBody, IUser } from '@/types';
import { getToken } from '@/utils/cookies';

class AppError extends Error {
  status: number | undefined;
  constructor(message: string) {
    super(message);
  }
}

export class AuthorizationError extends AppError {
  constructor(message: string) {
    super(message);
    this.status = 401;
  }
}

const getHeaders = (token?: string) => {
  const headers = new Headers();
  if (token) headers.append('Authorization', `Bearer ${token}`);
  headers.append('Content-Type', 'application/json;charset=utf-8');
  return headers;
};

const tokenExpire = 0.5;

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<any, void>({
      query: () => {
        let token = getToken();
        return {
          headers: getHeaders(token),
          url: `/auth/user`,
          method: 'GET',
        };
      },
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
    }),
    login: builder.mutation({
      query: (body) => {
        return {
          url: `/auth/login`,
          method: 'POST',
          body,
        };
      },
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          const { token } = data;
          Cookies.set('token', token, {
            expires: tokenExpire,
          });

          /*  dispatch(login({ name, email })); */
        } catch (error) {}
      },
    }),
    register: builder.mutation({
      query: (body) => {
        console.log(body);
        return {
          url: `/auth/register`,
          method: 'POST',
          body,
        };
      },
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {}
      },
    }),
  }),
  overrideExisting: false,
});
console.log(authApi);
export const { useRegisterMutation, useLoginMutation, useGetUserQuery } = authApi;

export const { getUser } = authApi.endpoints;
