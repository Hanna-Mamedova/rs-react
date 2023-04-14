import { configureStore } from '@reduxjs/toolkit';
import searchTextReducer from './reducers/searchTextSlice';
import charactersReducer from './reducers/charactersSlice';

const store = configureStore({
  reducer: {
    searchText: searchTextReducer,
    characters: charactersReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
