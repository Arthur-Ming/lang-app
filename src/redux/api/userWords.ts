import { IUserWords, IWord } from '@/types';
import { api, httpClient } from './';
import { getToken } from '@/utils/cookies';
import { arrToMap } from '@/utils/arrToMap';
import { userWordsRoutes } from './apiRoutes';

interface IUserWordsBody {
  wordId: string;
}

const getHeaders = (token?: string) => {
  const headers = new Headers();
  if (token) headers.append('Authorization', `Bearer ${token}`);
  headers.append('Content-Type', 'application/json;charset=utf-8');
  return headers;
};

export const userWordsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loadUserWords: builder.query<{ [key: string]: IWord }, void>({
      query: () => {
        const { getUrl, isProtected } = userWordsRoutes.words;
        return httpClient.get({ url: getUrl(), isProtected });
      },

      transformResponse: (response: IUserWords) => arrToMap(response.words),
    }),
    addUserWord: builder.mutation<IWord, { word: IWord }>({
      query: ({ word }) => {
        const { getUrl, isProtected } = userWordsRoutes.wordById;
        return httpClient.post({ url: getUrl(word.id), isProtected });
      },
      async onQueryStarted({ word }, { queryFulfilled, dispatch }) {
        const patchResult = dispatch(
          userWordsApi.util.updateQueryData('loadUserWords', undefined, (draft) => {
            draft[word.id] = word;
          })
        );
        try {
          await queryFulfilled;
        } catch (error) {
          console.log(error);
          patchResult.undo();
        }
      },
    }),
    removeUserWord: builder.mutation<IUserWords, { word: IWord }>({
      query: ({ word }) => {
        const { getUrl, isProtected } = userWordsRoutes.wordById;
        return httpClient.delete({ url: getUrl(word.id), isProtected });
      },
      async onQueryStarted({ word }, { queryFulfilled, dispatch }) {
        const patchResult = dispatch(
          userWordsApi.util.updateQueryData('loadUserWords', undefined, (draft) => {
            delete draft[word.id];
          })
        );
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoadUserWordsQuery,
  useAddUserWordMutation,
  useRemoveUserWordMutation,
  useLazyLoadUserWordsQuery,
} = userWordsApi;
