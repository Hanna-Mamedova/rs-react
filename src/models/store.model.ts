import { CharactersState } from '../store/reducers/charactersSlice';
import { FormValues } from './form.model';
import { NewBook } from './card.model';

export default interface AppState {
  searchText: '';
  characters: CharactersState;
  addBookForm: FormValues;
  newBooks: NewBook[];
}
