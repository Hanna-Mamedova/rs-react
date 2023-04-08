import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.css';
import { SearchParams } from 'models/api.model';

interface SearchProps {
  inputText: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onKeyDown: React.Dispatch<React.SetStateAction<SearchParams>>;
}

function SearchBar(props: SearchProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.onChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      props.onKeyDown({ name: (e.target as HTMLInputElement).value });
    }
  };

  return (
    <div className="search">
      <label htmlFor="search" className="search-label">
        Enter Character Name
      </label>
      <div className="input-wrap">
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        <input
          id="search"
          type="text"
          className="search-input"
          value={props.inputText}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
      <div className="search-help">For example: Rick or Morty...</div>
    </div>
  );
}

export default SearchBar;
