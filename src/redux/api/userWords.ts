import { IUserWords, IWord } from '@/types';
import { api } from './';
import { getToken, getUserId } from '@/utils/cookies';
import { arrToMap } from '@/utils/arrToMap';

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
        let token = getToken();
        return {
          headers: getHeaders(token),
          url: `/users/words`,
          method: 'GET',
        };
      },

      transformResponse: (response: IUserWords) => arrToMap(response.words),
    }),
    addUserWord: builder.mutation<IWord, { word: IWord }>({
      query: ({ word }) => {
        let token = getToken();
        return {
          headers: getHeaders(token),
          url: `/users/words/${word.id}`,
          method: 'POST',
        };
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
          patchResult.undo();
        }
      },
    }),
    removeUserWord: builder.mutation<IUserWords, { word: IWord }>({
      query: ({ word }) => {
        let token = getToken();
        return {
          headers: getHeaders(token),
          url: `/users/words/${word.id}`,
          method: 'DELETE',
        };
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
