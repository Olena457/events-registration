import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, get } from 'firebase/database';
import { database } from '../../firebase/firebaseConfig.js';

export const fetchParticipants = createAsyncThunk(
  'participants/fetchParticipants',
  async (cardId, thunkAPI) => {
    try {
      const participantsRef = ref(database, `participants/${cardId}`);
      const snapshot = await get(participantsRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        return {
          cardId,
          participants: Object.values(data),
        };
      } else {
        return thunkAPI.rejectWithValue('No registered participants yet');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
