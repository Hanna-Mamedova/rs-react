import { createSlice } from '@reduxjs/toolkit';
import { FormValues } from 'models/form.model';

const initianlFormValues: FormValues = {
  title: '',
  author: '',
  price: '',
  date: '',
  lang: '',
  genre: [],
  onStock: '',
  image: new DataTransfer().files,
};

const FormSlice = createSlice({
  name: 'addBookForm',
  initialState: initianlFormValues,
  reducers: {
    saveFormValues: (state, action) => action.payload,
  },
});

export const { saveFormValues } = FormSlice.actions;

export default FormSlice.reducer;
