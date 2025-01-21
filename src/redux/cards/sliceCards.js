import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCards,
  fetchCardsPaginated,
  //   fetchFilteredCards,
} from './operationsCards.js';

const initialState = {
  data: [],
  //   filtered: [],
  lastKey: null,
  loading: false,
  error: null,
};

const CardsSlice = createSlice({
  name: 'Cards',
  initialState,
  reducers: {
    setFilteredCards(state, action) {
      state.filtered = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCards.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCardsPaginated.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCardsPaginated.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload.Cards];
        state.lastKey = action.payload.lastKey;
        state.loading = false;
      })
      .addCase(fetchCardsPaginated.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const cardsReducer = CardsSlice.reducer;

// ___________________________________________________________________________not  use
// export const { setFilteredCards } = CardsSlice.actions;
//   .addCase(fetchFilteredCards.pending, state => {
//     state.loading = true;
//     state.error = null;
//   })
//   .addCase(fetchFilteredCards.fulfilled, (state, action) => {
//     state.loading = false;
//     state.filtered = action.payload.Cards;
//     state.lastKey = action.payload.lastKey;
//   })
//   .addCase(fetchFilteredCards.rejected, (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   });
