import { useCallback, useEffect, useState } from 'react';

import Cards from '../../components/main/cards/Cards';
import SearchBar from '../../components/main/search-bar/SearchBar';
import NoData from '../../components/main/no-data/NoData';
import Modal from '../../components/modal/Modal';

import { Character, Page } from 'models/card.model';
import { SearchParams } from 'models/api.model';
import { noDataFound, noDataLoading, noDataYet } from '../../data/no-data';
import { BASE_URL } from '../../data/api-data';

const SEARCH_VALUE_KEY = 'SAVE_SEARCH';

function Main() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [activeCardId, setActiveCardId] = useState<number>(0);

  const createSearchQuery = useCallback((params: SearchParams): string => {
    const queryParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) queryParams.append(key, value);
    }
    const queryString = queryParams.toString();
    return queryString;
  }, []);

  const getSearchData = useCallback(
    async (params: SearchParams) => {
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
    },
    [createSearchQuery]
  );

  useEffect(() => {
    const storedData = localStorage.getItem(SEARCH_VALUE_KEY);
    if (storedData) {
      getSearchData({ name: storedData });
    }
  }, [getSearchData]);

  const handleViewClick = (id: number): void => {
    setActiveCardId(id);
    setOpenModal(true);
  };

  return (
    <div>
      <SearchBar />
      {characters.length > 0 && <Cards results={characters} onClick={handleViewClick} />}
      {!characters.length && !isLoading && !error && <NoData data={noDataYet} />}
      {isLoading && <NoData data={noDataLoading} />}
      {error && <NoData data={noDataFound} />}
      <Modal open={openModal} id={activeCardId} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default Main;
