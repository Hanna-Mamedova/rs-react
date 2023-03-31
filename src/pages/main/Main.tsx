import Cards from '../../components/main/cards/Cards';
import SearchBar from '../../components/main/search-bar/SearchBar';

import { books } from '../../components/main/cards/cards-data';

function Main() {
  return (
    <div>
      <SearchBar />
      <Cards books={books} />
    </div>
  );
}

export default Main;
