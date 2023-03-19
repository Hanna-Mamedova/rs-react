import React, { Component } from 'react';
import Cards from './cards/Cards';
import SearchBar from './search-bar/SearchBar';

class Main extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <SearchBar />
        <Cards />
      </div>
    );
  }
}

export default Main;
