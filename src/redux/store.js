import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/sliceAuth.js';
import { cardsReducer } from './cards/sliceCards.js';
import { favoritesReducer } from './favorites/sliceFavorites.js';
import { participantsReducer } from './participants/sliceParticipants.js';
import { createCardReducer } from './сreateCard/sliceCreateCard.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cards: cardsReducer,
    favorites: favoritesReducer,
    participants: participantsReducer,
    createCard: createCardReducer,
  },
});

export default store;
