import { createSlice } from '@reduxjs/toolkit';
import { NewBook } from 'models/card.model';

const initialState: NewBook[] = [];

const NewBooksSlice = createSlice({
  name: 'newBooks',
  initialState,
  reducers: {
    addNewBook: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addNewBook } = NewBooksSlice.actions;

export default NewBooksSlice.reducer;
