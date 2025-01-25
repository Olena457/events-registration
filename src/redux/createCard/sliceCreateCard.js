import { createSlice } from '@reduxjs/toolkit';
import { addCard } from './operationsCreateCard.js';

const createCardSlice = createSlice({
  name: 'createCard',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addCard.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(addCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const createCardReducer = createCardSlice.reducer;
