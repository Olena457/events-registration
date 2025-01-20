import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/sliceAuth.js';
import { cardsReducer } from './cards/sliceCards.js';
import { participantsReducer } from './participants/sliceParticipants.js';
const store = configureStore({
  reducer: {
    auth: authReducer,
    cards: cardsReducer,
    participants: participantsReducer,
  },
});

export default store;
