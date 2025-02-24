import { createSlice } from '@reduxjs/toolkit';
import { fetchParticipants } from './operationsParticipants.js';

const participantsSlice = createSlice({
  name: 'participants',
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchParticipants.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchParticipants.fulfilled, (state, action) => {
        state.loading = false;
        state.data[action.payload.cardId] = action.payload.participants;
      })
      .addCase(fetchParticipants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load participants';
      });
  },
});

export const participantsReducer = participantsSlice.reducer;
