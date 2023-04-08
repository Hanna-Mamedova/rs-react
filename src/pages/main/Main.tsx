import { useEffect, useState } from 'react';
import Cards from '../../components/main/cards/Cards';
import SearchBar from '../../components/main/search-bar/SearchBar';
import { Character, Page } from 'models/card.model';
import { SearchParams } from 'models/api.model';

const SEARCH_VALUE_KEY = 'SAVE_SEARCH';
const BASE_URL = 'https://rickandmortyapi.com/api/character';

function Main() {
  const [inputText, setInputText] = useState(() => {
    const saved = localStorage.getItem(SEARCH_VALUE_KEY) as string;
    const initialValue = saved;
    return initialValue || '';
  });
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    return () => {
      localStorage.setItem(SEARCH_VALUE_KEY, inputText);
    };
  });

  const createSearchQuery = (params: SearchParams): URLSearchParams => {
    const queryParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      queryParams.append(key, value);
    }
    return queryParams;
  };

  const getSearchData = async (params: SearchParams) => {
    const queryString = createSearchQuery(params).toString();
    const response = await fetch(`${BASE_URL}/?${queryString}`);
    const data: Page = await response.json();
    setCharacters(data.results);
  };

  return (
    <div>
      <SearchBar inputText={inputText} onChange={setInputText} onKeyDown={getSearchData} />
      <Cards results={characters} />
    </div>
  );
}

export default Main;
