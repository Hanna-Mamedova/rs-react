import { CharactersState } from '../store/reducers/charactersSlice';

export default interface AppState {
  searchText: '';
  characters: CharactersState;
}
