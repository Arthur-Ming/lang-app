import { getToken } from '@/utils/cookies';
import fetchJson from '@/utils/fetch-json';
import { createApi } from '@reduxjs/toolkit/query/react';

const getHeaders = (token?: string) => {
  const headers = new Headers();
  if (token) headers.append('Authorization', `Bearer ${token}`);
  headers.append('Content-Type', 'application/json;charset=utf-8');
  return headers;
};

interface IHttpClient<T> {
  url: string;
  isProtected?: boolean;
  body?: T;
}

interface IRequest<T> extends IHttpClient<T> {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

export const httpClient = {
  get: <T>({ url, isProtected }: IHttpClient<T>): IRequest<T> => ({
    url,
    method: 'GET',
    isProtected,
  }),
  post: <T>({ url, body, isProtected }: IHttpClient<T>): IRequest<T> => ({
    url,
    method: 'POST',
    body,
    isProtected,
  }),

  put: <T>({ url, body, isProtected }: IHttpClient<T>): IRequest<T> => ({
    url,
    method: 'PUT',
    body,
    isProtected,
  }),
  delete: <T>({ url, isProtected }: IHttpClient<T>): IRequest<T> => ({
    url,
    method: 'DELETE',
    isProtected,
  }),
};

interface IError {
  response?: {
    status?: number;
    data?: string;
  };
  message: string;
  status?: number;
}

const fetchQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }) =>
  async <T>({ url, isProtected, method, body, ...rest }: IRequest<T>) => {
    try {
      let token;
      if (isProtected) token = getToken();

      const result = await fetchJson<T>({
        url: baseUrl + url,
        body,
        config: { method, headers: getHeaders(token), ...rest },
      });

      return { data: result };
    } catch (error: unknown) {
      const err = error as IError;

      return {
        error: {
          status: err?.response?.status || err?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchQuery({
    baseUrl: '',
  }),
  endpoints: () => ({}),
  tagTypes: ['User'],
});
