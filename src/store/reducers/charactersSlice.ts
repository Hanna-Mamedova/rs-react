import { createSlice } from '@reduxjs/toolkit';
import { Character } from 'models/card.model';
import { fetchCharacters } from '../../utils/api';

export interface CharactersState {
  data: Character[];
  loading: boolean;
  error: string | null;
}

const initialState: CharactersState = {
  data: [],
  loading: false,
  error: null,
};

const CharactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.data = [];
        state.loading = false;
        state.error = action.error.message ?? 'Unknown error occurred';
      });
  },
});

export default CharactersSlice.reducer;
