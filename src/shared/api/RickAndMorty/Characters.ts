import {
  CharacterAttributes,
  CharactersAnswer,
  HandledData,
  RequestParams,
} from '../../types/types';

const emptyData = {
  characters: [],
  page: 1,
  records: 0,
};

const emptyCharacter: CharacterAttributes = {
  gender: '',
  id: '',
  image: '',
  location: '',
  name: '',
  species: '',
  status: '',
};

export class CharactersAPI {
  private static instance: CharactersAPI;
  private baseURL: string;
  private requestWasDone: number;
  private maxRequestsPerSec: number;
  errorMessage: string;
  abortControllerCharacters: AbortController | null;
  abortControllerSingleCharacter: AbortController | null;

  constructor() {
    this.baseURL = `https://belka.romakhin.ru/api/v1/rimorti`;
    this.requestWasDone = 0;
    this.maxRequestsPerSec = 10;
    this.errorMessage = 'Ooops! Looks like somethig wrong with API';
    this.abortControllerCharacters = null;
    this.abortControllerSingleCharacter = null;
  }

  public static getInstance() {
    if (!CharactersAPI.instance) {
      CharactersAPI.instance = new CharactersAPI();
    }
    return CharactersAPI.instance;
  }

  public async getCharacters(params: RequestParams): Promise<HandledData> {
    this.checkCharactersAbortController();

    if (this.handleRequestsFrequency()) {
      return emptyData;
    }

    let res: CharactersAnswer | null = null;
    try {
      const response = await fetch(this.createCharactersQueryStr(params), {
        signal: this.abortControllerCharacters!.signal,
      });
      if (response.ok) {
        res = await response.json();
      }
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        console.log(this.errorMessage);
      }
    }
    this.abortControllerCharacters = null;

    return res ? this.transformData(res, Number(params.page)) : emptyData;
  }

  async getSingleCharacter(id: string) {
    this.checkSingleCharacterAbortController();

    if (this.handleRequestsFrequency()) {
      return emptyCharacter;
    }

    const link = this.baseURL + '/' + id;

    let res = null;
    try {
      const response = await fetch(link);
      if (response.ok) {
        res = await response.json();
      }
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        console.log(this.errorMessage);
      }
    }
    this.abortControllerSingleCharacter = null;

    return res ? res : emptyCharacter;
  }

  private transformData(data: CharactersAnswer, page: number): HandledData {
    const characters = data.results;
    return {
      characters,
      page,
      records: data.total,
    };
  }

  private handleRequestsFrequency() {
    if (this.requestWasDone >= this.maxRequestsPerSec) {
      return true;
    } else {
      this.requestWasDone += 1;
      setTimeout(() => (this.requestWasDone -= 1), 1000);
      return false;
    }
  }

  private createCharactersQueryStr(params: RequestParams) {
    const { searchParam = null, page = null, limit = null } = params;
    const queryString = searchParam ? `&search.name=${searchParam}` : '';
    const pageString = page ? `&page=${+page - 1}` : '';
    const pageSizeString = limit ? `&page_size=${limit}` : '';
    const link = `${this.baseURL}?${queryString}${pageString}${pageSizeString}`;
    console.log(link);

    return link;
  }

  private checkCharactersAbortController() {
    if (this.abortControllerCharacters) {
      this.abortControllerCharacters.abort();
    }
    this.abortControllerCharacters = new AbortController();
  }

  private checkSingleCharacterAbortController() {
    if (this.abortControllerSingleCharacter) {
      this.abortControllerSingleCharacter.abort();
    }
    this.abortControllerSingleCharacter = new AbortController();
  }

  private async sleep(time: number) {
    return new Promise((res) => setTimeout(res, time));
  }
}
