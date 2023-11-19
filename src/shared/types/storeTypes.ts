export type AppSliceType = {
  isCharactersLoading: boolean;
  isDetailsLoading: boolean;
  itemsPerPage: number;
  currPage: number;
  lastPage: number;
  searchTerm: string;
};

export type RickAndMortyQueryTipe = {
  page: string;
  limit: string;
  searchTerm: string;
};
