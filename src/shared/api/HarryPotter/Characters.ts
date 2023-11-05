import {
  CharactersAnswer,
  HandledData,
  RequestParams,
} from '../../types/types';

const emptyData = {
  characters: [],
  page: 1,
  records: 0,
};

export class CharactersAPI {
  private static instance: CharactersAPI;
  private baseURL: string;
  private baseFilterString: string;
  private requestWasDone: number;
  private maxRequestsPerSec: number;
  private baseCharacterUrl: string;
  errorMessage: string;

  constructor() {
    this.baseFilterString = '&sort=name&filter[gender_not_null]=1';
    this.baseURL = `https://api.potterdb.com/v1/characters?${this.baseFilterString}`;
    this.baseCharacterUrl = 'https://api.potterdb.com/v1/characters/';
    this.requestWasDone = 0;
    this.maxRequestsPerSec = 5;
    this.errorMessage = 'Ooops! Looks like somethig wrong with API';
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
    if (this.requestWasDone >= this.maxRequestsPerSec) {
      return emptyData;
    } else {
      this.requestWasDone += 1;
      console.log(this.requestWasDone);
      setTimeout(() => (this.requestWasDone -= 1), 1000);
    }
    try {
      const response = await fetch(link);
      if (response.ok) {
        res = await response.json();
      }
    } catch (e) {
      console.log(this.errorMessage);
    }
    if (!res) {
      return emptyData;
    }

    return this.transformData(res);
  }

  async getSingleCharacter(id: string) {
    const link = this.baseCharacterUrl + id;
    let res = null;

    if (this.requestWasDone >= this.maxRequestsPerSec) {
      return emptyData;
    } else {
      this.requestWasDone += 1;
      console.log(this.requestWasDone);
      setTimeout(() => (this.requestWasDone -= 1), 1000);
    }

    try {
      const response = await fetch(link);
      if (response.ok) {
        res = await response.json();
      }
    } catch (e) {
      console.log(this.errorMessage);
    }

    console.log(res.data.attributes);

    return res.data.attributes;
  }

  private transformData(data: CharactersAnswer): HandledData {
    const characters = data.data.map((character) => {
      const attrs = character.attributes;
      attrs.id = character.id;
      return attrs;
    });
    return {
      characters,
      page: data.meta.pagination.current,
      records: data.meta.pagination.records,
    };
  }

  private async sleep(time: number) {
    return new Promise((res) => setTimeout(res, time));
  }
}
