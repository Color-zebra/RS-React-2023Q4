import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharactersAnswer } from '../../types/types';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://belka.romakhin.ru/api/v1' }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CharactersAnswer, string>({
      query: () => '/rimorti',
    }),
    getSingleCharacter: builder.query<CharacterData, string>({
      query: (id) => `/rimort/${id}`,
    }),
  }),
});
