export class CharactersAPI {
  private static instance: CharactersAPI;
  baseURL: string;

  constructor() {
    this.baseURL = 'https://rickandmortyapi.com/api/character';
  }

  public static getInstance() {
    if (!CharactersAPI.instance) {
      CharactersAPI.instance = new CharactersAPI();
    }
    return CharactersAPI.instance;
  }
}
