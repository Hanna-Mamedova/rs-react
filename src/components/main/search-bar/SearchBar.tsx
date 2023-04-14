import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.css';
import { saveInput } from '../../../store/reducers/SearchTextSlice';
import { useDispatch, useSelector } from 'react-redux';
import AppState from 'models/store.model';

function SearchBar() {
  const dispatch = useDispatch();
  const searchText = useSelector((state: AppState) => state.searchText);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    dispatch(saveInput(value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      const { value } = e.target as HTMLInputElement;
      dispatch(saveInput(value));
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
          role="search"
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
      <div className="search-help">For example: Rick or Morty...</div>
    </div>
  );
}

export default SearchBar;
