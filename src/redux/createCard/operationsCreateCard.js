import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, push } from 'firebase/database';
import { database } from '../../firebase/firebaseConfig.js';

export const addCard = createAsyncThunk(
  'createCard/addCard',
  async (newCard, thunkAPI) => {
    try {
      const cardsRef = ref(database, 'cards');
      const newCardRef = await push(cardsRef, newCard);
      return { id: newCardRef.key, ...newCard };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
