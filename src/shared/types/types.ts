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
    pagination: {
      current: number;
      last: number;
      next: number;
      records: number;
    };
  };
};
