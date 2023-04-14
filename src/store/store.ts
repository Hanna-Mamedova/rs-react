import { configureStore } from '@reduxjs/toolkit';
import searchTextReducer from './reducers/SearchTextSlice';

const store = configureStore({
  reducer: {
    searchText: searchTextReducer,
  },
});

export default store;
