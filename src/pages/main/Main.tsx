import React, { Component } from 'react';
import Cards from '../../components/main/cards/Cards';
import SearchBar from '../../components/main/search-bar/SearchBar';

import { books } from '../../components/main/cards/cards-data';

class Main extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <SearchBar />
        <Cards books={books} />
      </div>
    );
  }
}

export default Main;
