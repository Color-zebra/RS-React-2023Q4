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
  private requestWasDone: number;
  private maxRequestsPerSec: number;
  errorMessage: string;

  constructor() {
    this.baseURL = `https://belka.romakhin.ru/api/v1/rimorti`;
    this.requestWasDone = 0;
    this.maxRequestsPerSec = 10;
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

    const queryString = searchParam ? `&search.name=${searchParam}` : '';
    const pageString = page ? `&page=${page}` : '';
    const pageSizeString = limit ? `&page_size=${limit}` : '';

    const link = `${this.baseURL}?${queryString}${pageString}${pageSizeString}`;
    let res: CharactersAnswer | null = null;
    if (this.requestWasDone >= this.maxRequestsPerSec) {
      return emptyData;
    } else {
      this.requestWasDone += 1;
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

    return this.transformData(res, Number(page));
  }

  async getSingleCharacter(id: string) {
    const link = this.baseURL + '/' + id;
    let res = null;

    if (this.requestWasDone >= this.maxRequestsPerSec) {
      return emptyData;
    } else {
      this.requestWasDone += 1;
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

    return res;
  }

  private transformData(data: CharactersAnswer, page: number): HandledData {
    const characters = data.results;
    return {
      characters,
      page,
      records: data.total,
    };
  }

  private async sleep(time: number) {
    return new Promise((res) => setTimeout(res, time));
  }
}
