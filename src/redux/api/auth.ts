import { api, httpClient } from '.';
import { authRoutes } from './apiRoutes';
import { setToken } from '@/utils/cookies';

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<any, void>({
      query: () => {
        const { getUrl, isProtected } = authRoutes.user;
        return httpClient.get({ url: getUrl(), isProtected });
      },
      providesTags: ['User'],
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
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
      invalidatesTags: (result, error, arg) => {
        const { token } = result;
        setToken(token);
        return ['User'];
      },
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
        } catch (error) {}
      },
    }),
    register: builder.mutation({
      query: (body) => {
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
