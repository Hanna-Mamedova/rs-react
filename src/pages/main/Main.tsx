import { useEffect, useState } from 'react';
import Cards from '../../components/main/cards/Cards';
import SearchBar from '../../components/main/search-bar/SearchBar';
import { Character, Page } from 'models/card.model';
import { SearchParams } from 'models/api.model';
import { noDataFound, noDataLoading, noDataYet } from '../../data/no-data';
import NoData from '../../components/main/no-data/NoData';

const SEARCH_VALUE_KEY = 'SAVE_SEARCH';
const BASE_URL = 'https://rickandmortyapi.com/api/character';

function Main() {
  const [inputText, setInputText] = useState(() => {
    const saved = localStorage.getItem(SEARCH_VALUE_KEY) as string;
    const initialValue = saved;
    return initialValue || '';
  });
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    return () => {
      localStorage.setItem(SEARCH_VALUE_KEY, inputText);
    };
  });

  useEffect(() => {
    const storedData = localStorage.getItem(SEARCH_VALUE_KEY);
    if (storedData) {
      getSearchData({ name: storedData });
    }
  }, []);

  const createSearchQuery = (params: SearchParams): string => {
    const queryParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) queryParams.append(key, value);
    }
    const queryString = queryParams.toString();
    return queryString;
  };

  const getSearchData = async (params: SearchParams) => {
    const queryString = createSearchQuery(params);
    setError(false);
    if (queryString) {
      try {
        setIsLoading(true);
        setCharacters([]);
        const response = await fetch(`${BASE_URL}/?${queryString}`);
        if (!response.ok) {
          setIsLoading(false);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Page = await response.json();
        setTimeout(() => {
          setIsLoading(false);
          setCharacters(data.results);
        }, 1000);
      } catch (e) {
        console.error('Error fetching data:', e);
        setError(true);
      }
    } else {
      setCharacters([]);
    }
  };

  return (
    <div>
      <SearchBar inputText={inputText} onChange={setInputText} onKeyDown={getSearchData} />
      {characters.length > 0 && <Cards results={characters} />}
      {!characters.length && !isLoading && !error && <NoData data={noDataYet} />}
      {isLoading && <NoData data={noDataLoading} />}
      {error && <NoData data={noDataFound} />}
    </div>
  );
}

export default Main;
