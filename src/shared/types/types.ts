export type CharacterData = {
  attributes: CharacterAttributes;
  id: string;
  links: {
    self: string;
  };
  type: string;
};

export type CharacterAttributes = {
  name: string;
  born: string;
  image: string;
  species: string;
  wiki: string;
  gender: string;
  slug: string;
};

export type PaginationData = {
  current: number;
  last: number;
  next: number;
  records: number;
};

export type CharactersAnswer = {
  data: CharacterData[];
  links: {
    current: string;
    last: string;
    next: string;
    self: string;
  };
  meta: {
    pagination: PaginationData;
  };
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
