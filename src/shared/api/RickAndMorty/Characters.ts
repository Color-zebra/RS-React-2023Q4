import { CharacterAttributes, CharactersAnswer } from '../../types/types';

export class CharactersAPI {
  private static instance: CharactersAPI;
  private baseURL: string;
  private baseFilterString: string;
  private pageSize: number;

  constructor() {
    this.baseFilterString = '&sort=name&filter[gender_not_null]=1';
    this.pageSize = 10;
    this.baseURL = `https://api.potterdb.com/v1/characters?page[size]=${this.pageSize}${this.baseFilterString}`;
  }

  public static getInstance() {
    if (!CharactersAPI.instance) {
      CharactersAPI.instance = new CharactersAPI();
    }
    return CharactersAPI.instance;
  }

  public async getCharacters(
    searchParam?: string
  ): Promise<CharacterAttributes[] | never[]> {
    const queryString = searchParam ? `&filter[name_cont]=${searchParam}` : '';
    const link = `${this.baseURL}${queryString}`;
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
      return [];
    }
    return this.transformData(res);
  }

  private transformData(data: CharactersAnswer): CharacterAttributes[] {
    return data.data.map((character) => character.attributes);
  }

  private async sleep(time: number) {
    return new Promise((res) => setTimeout(res, time));
  }
}
