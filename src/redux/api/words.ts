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
      query: ({ group, page }) => {
        const { getUrl, isProtected } = wordsRoutes.words;
        return httpClient.get({ url: getUrl(String(group), String(page)), isProtected });
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoadWordsQuery, useLazyLoadWordsQuery } = wordsApi;
