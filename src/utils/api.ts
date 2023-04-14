import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../data/api-data';
import { SearchParams } from 'models/api.model';
import { Page } from 'models/card.model';

const createSearchQuery = (params: SearchParams): string => {
  const queryParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value) queryParams.append(key, value);
  }
  const queryString = queryParams.toString();
  return queryString;
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetch',
  async (params: SearchParams) => {
    const queryString = createSearchQuery(params);
    const response = await fetch(`${BASE_URL}/?${queryString}`);
    const data: Page = await response.json();
    return data.results;
  }
);
