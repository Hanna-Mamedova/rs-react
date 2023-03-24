import React, { Component } from 'react';
import Cards from '../../components/main/cards/Cards';
import SearchBar from '../../components/main/search-bar/SearchBar';

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
