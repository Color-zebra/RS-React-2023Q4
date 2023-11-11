import { CharacterAttributes } from '../../../../shared/types/types';

export type CharactersState = {
  characters: CharacterAttributes[];
};

export enum CharactersActionKinds {
  SET = 'set',
}

export type CharactersAction = {
  type: CharactersActionKinds;
  payload: CharacterAttributes[];
};

export type SearchState = {
  searchTerm: string;
};

export enum SearchActionKinds {
  SET = 'set',
}

export type SearchAction = {
  type: SearchActionKinds;
  payload: string;
};

export type PaginationState = {
  currPage: number;
  lastPage: number;
};

export enum PaginationActionKinds {
  SET_CURR = 'set current page',
  SET_LAST = 'set last page',
}

export type PaginationAction = {
  type: PaginationActionKinds;
  payload: number;
};
