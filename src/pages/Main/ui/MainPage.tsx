import { useEffect, useState } from 'react';
import { Character } from '../../../shared/types/types';
import { CharactersAPI } from '../../../shared/api/RickAndMorty/Characters';
import { Header } from '../../../widgets/Header';
import hashLSKey from '../../../shared/utils/hashLocalStorageKey';
import { Content } from '../../../widgets/Content';

const MainPage = () => {
  const Api = CharactersAPI.getInstance();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [searchParam, setSearchParam] = useState(
    localStorage.getItem(hashLSKey('searchParam')) || ''
  );

  const changeSearchParams = (newParam: string) => {
    localStorage.setItem(hashLSKey('searchParam'), newParam);
    setSearchParam(newParam);
  };

  useEffect(() => {
    const getCharacters = async () => {
      setIsReady(false);
      const characters = await Api.getCharacters(searchParam);
      setCharacters(characters);
      setIsReady(true);
    };

    getCharacters();
  }, [Api, searchParam]);

  return (
    <>
      <Header onSearchPress={changeSearchParams} searchParam={searchParam} />
      <Content characters={characters} isReady={isReady} />
    </>
  );
};

export default MainPage;
