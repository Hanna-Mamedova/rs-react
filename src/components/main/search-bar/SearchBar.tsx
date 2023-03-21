import { Component, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './search-bar.css';

const SEARCH_VALUE_KEY = 'SAVE_SEARCH';

type InputState = {
  inputText: string;
};

class SearchBar extends Component {
  state: InputState = {
    inputText: localStorage.getItem(SEARCH_VALUE_KEY) || '',
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value: inputText },
    } = e;
    this.setState({
      inputText,
    });
  };

  componentWillUnmount(): void {
    localStorage.setItem(SEARCH_VALUE_KEY, this.state.inputText);
  }

  render(): ReactNode {
    const { inputText } = this.state;
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
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
