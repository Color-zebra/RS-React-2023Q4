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
    await this.sleep(1000); // server answer is too fast, i want to show spinner
    return res ? res.results : [];
  }

  private async sleep(time: number) {
    return new Promise((res) => setTimeout(res, time));
  }
}
