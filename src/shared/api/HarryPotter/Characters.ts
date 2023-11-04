import {
  CharactersAnswer,
  HandledData,
  RequestParams,
} from '../../types/types';

export class CharactersAPI {
  private static instance: CharactersAPI;
  private baseURL: string;
  private baseFilterString: string;
  private pageSize: number;

  constructor() {
    this.baseFilterString = '&sort=name&filter[gender_not_null]=1';
    this.pageSize = 10;
    this.baseURL = `https://api.potterdb.com/v1/characters?${this.baseFilterString}`;
  }

  public static getInstance() {
    if (!CharactersAPI.instance) {
      CharactersAPI.instance = new CharactersAPI();
    }
    return CharactersAPI.instance;
  }

  public async getCharacters(params: RequestParams): Promise<HandledData> {
    const { searchParam = null, page = null, limit = null } = params;

    const queryString = searchParam ? `&filter[name_cont]=${searchParam}` : '';
    const pageString = page ? `&page[number]=${page}` : '';
    const pageSizeString = limit ? `&page[size]=${limit}` : '';

    const link = `${this.baseURL}${queryString}${pageString}${pageSizeString}`;
    let res: CharactersAnswer | null = null;
    try {
      const response = await fetch(link);
      if (response.ok) {
        res = await response.json();
      }
    } catch (e) {
      console.log('Ooops! Looks like somethig wrong with API');
    }
    if (!res) {
      return {
        characters: [],
        page: 1,
        records: 0,
      };
    }
    return this.transformData(res);
  }

  private transformData(data: CharactersAnswer): HandledData {
    return {
      characters: data.data.map((character) => character.attributes),
      page: data.meta.pagination.current,
      records: data.meta.pagination.records,
    };
  }

  private async sleep(time: number) {
    return new Promise((res) => setTimeout(res, time));
  }
}
