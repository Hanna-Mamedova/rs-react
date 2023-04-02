import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.css';

const SEARCH_VALUE_KEY = 'SAVE_SEARCH';

function SearchBar() {
  const [inputText, setinputText] = useState(() => {
    const saved = localStorage.getItem(SEARCH_VALUE_KEY) as string;
    const initialValue = saved;
    return initialValue || '';
  });

  useEffect(() => {
    localStorage.setItem(SEARCH_VALUE_KEY, inputText);
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setinputText(e.target.value);
  };

  return (
    <div className="search">
      <label htmlFor="search" className="search-label">
        Search
      </label>
      <div className="input-wrap">
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        <input
          id="search"
          type="text"
          className="search-input"
          value={inputText}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
