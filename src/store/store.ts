import { configureStore } from '@reduxjs/toolkit';
import searchTextReducer from './reducers/searchTextSlice';
import charactersReducer from './reducers/charactersSlice';
import formReducer from './reducers/formSlice';
import newBooksReducer from './reducers/newBooksSlice';

const store = configureStore({
  reducer: {
    searchText: searchTextReducer,
    characters: charactersReducer,
    addBookForm: formReducer,
    newBooks: newBooksReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
