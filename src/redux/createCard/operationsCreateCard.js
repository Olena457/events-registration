import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, push, remove } from 'firebase/database';
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
export const deleteCard = createAsyncThunk(
  'createCard/deleteCard',
  async (cardId, thunkAPI) => {
    try {
      const cardRef = ref(database, `cards/${cardId}`);
      await remove(cardRef);
      return cardId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
