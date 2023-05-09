import { IWord } from '@/types';
import { api, httpClient } from './';
import { wordsRoutes } from './apiRoutes';

interface ILoadWordsParams {
  page?: number | string;
  group?: number | string;
}

const wordsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loadWords: builder.query<IWord[], ILoadWordsParams>({
      query: ({ page, group }) => {
        const { getUrl, isProtected } = wordsRoutes.words;
        return httpClient.get({ url: getUrl(group, page), isProtected });
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoadWordsQuery, useLazyLoadWordsQuery } = wordsApi;
