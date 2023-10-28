export class CharactersAPI {
  private static instance: CharactersAPI;
  private baseURL: string;

  constructor() {
    this.baseURL = 'https://rickandmortyapi.com/api/character';
  }

  public static getInstance() {
    if (!CharactersAPI.instance) {
      CharactersAPI.instance = new CharactersAPI();
    }
    return CharactersAPI.instance;
  }

  public async getCharacters(searchParam?: string) {
    const queryString = searchParam ? `?name=${searchParam}` : '';
    const link = `${this.baseURL}${queryString}`;
    let res = null;
    try {
      const response = await fetch(link);
      if (response.ok) {
        res = await response.json();
      }
    } catch (e) {
      console.log(e);
    }
    console.log(res);
    return res ? res.results : [];
  }
}
