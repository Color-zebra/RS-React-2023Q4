import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterAttributes, CharactersAnswer } from '../../types/types';
import { RickAndMortyQueryTipe } from '../../types/storeTypes';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://belka.romakhin.ru/api/v1' }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CharactersAnswer, RickAndMortyQueryTipe>({
      query: ({ limit, page, searchTerm }) => ({
        url: '/rimorti',
        params: {
          page_size: limit,
          page: page === '0' ? page : String(+page - 1),
          ['search.name']: searchTerm,
        },
      }),
    }),
    getSingleCharacter: builder.query<CharacterAttributes, string>({
      query: (id) => ({
        url: `/rimorti/${id}`,
      }),
    }),
  }),
});
