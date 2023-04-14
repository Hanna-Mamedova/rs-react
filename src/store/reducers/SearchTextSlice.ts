import { createSlice } from '@reduxjs/toolkit';

const SearchTextSlice = createSlice({
  name: 'searchText',
  initialState: '',
  reducers: {
    saveInput: (state, action) => action.payload,
  },
});

export const { saveInput } = SearchTextSlice.actions;

export default SearchTextSlice.reducer;
