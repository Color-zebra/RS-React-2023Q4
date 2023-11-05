export type CharacterAttributes = {
  name: string;
  status: string;
  species: string;
  gender: string;
  location: string;
  image: string;
  id: string;
};

export type PaginationData = {
  current: number;
  last: number;
  next: number;
  records: number;
};

export type CharactersAnswer = {
  total: number;
  results: CharacterAttributes[];
};

export type HandledData = {
  characters: CharacterAttributes[];
  page: number;
  records: number;
};

export type RequestParams = {
  page: string | number;
  limit: string | number;
  searchParam: string;
};
