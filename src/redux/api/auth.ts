import Cookies from 'js-cookie';
import { api, httpClient } from '.';
import { authRoutes } from './apiRoutes';

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
        const { getUrl, isProtected } = authRoutes.user;
        return httpClient.get({ url: getUrl(), isProtected });
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
        const { getUrl, isProtected } = authRoutes.login;
        return httpClient.post({ url: getUrl(), isProtected, body });
      },
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          const { token } = data;
          Cookies.set('token', token, {
            expires: tokenExpire,
          });
        } catch (error) {}
      },
    }),
    register: builder.mutation({
      query: (body) => {
        console.log(body);
        const { getUrl, isProtected } = authRoutes.register;
        return httpClient.post({ url: getUrl(), isProtected, body });
      },
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useRegisterMutation, useLoginMutation, useGetUserQuery } = authApi;
