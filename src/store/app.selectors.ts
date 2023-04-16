import { createSelector } from '@reduxjs/toolkit';
import { Character } from 'models/card.model';
import AppState from 'models/store.model';

export const selectSearchText = (state: AppState) => state.searchText;

export const selectAllCharacters = (state: AppState) => state.characters.data;
export const selectCharactersLoading = (state: AppState) => state.characters.loading;
export const selectCharactersError = (state: AppState) => state.characters.error;

export const selectCharacterById = (id: number) =>
  createSelector(selectAllCharacters, (state) =>
    state.find((character: Character) => character.id === id)
  );

export const selectFormValues = (state: AppState) => state.addBookForm;
export const selectNewBooks = (state: AppState) => state.newBooks;
