import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, get } from 'firebase/database';
import { database } from '../../firebase/firebaseConfig.js';

export const fetchParticipants = createAsyncThunk(
  'participants/fetchParticipants',
  async (cardId, thunkAPI) => {
    try {
      // const participantsRef = ref(database, `cards/${cardId}/participants`);
      const participantsRef = ref(database, `register/${cardId}`);
      const snapshot = await get(participantsRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        return {
          cardId,
          participants: data,
        };
      } else {
        return thunkAPI.rejectWithValue('No participants available');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
