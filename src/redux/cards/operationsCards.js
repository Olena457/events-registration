import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ref,
  get,
  set,
  query,
  orderByKey,
  startAfter,
  limitToFirst,
  orderByChild,
  equalTo,
} from 'firebase/database';
import { auth, database } from '../../firebase/firebaseConfig.js';

// __________________fetch cards
export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (_, thunkAPI) => {
    try {
      const cardsRef = ref(database, 'cards');
      const snapshot = await get(cardsRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        if (typeof data === 'object' && data !== null) {
          const cardsArray = Object.keys(data).map(id => ({
            id,
            ...data[id],
          }));
          return cardsArray;
        } else {
          return thunkAPI.rejectWithValue('Data format is not correct');
        }
      } else {
        return thunkAPI.rejectWithValue('No data available');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// __________________register card

export const registerCard = createAsyncThunk(
  'cards/register',
  async ({ fullname, email, phoneNumber, question, cardID }, thunkAPI) => {
    try {
      const user = auth.currentUser;
      const uid = user.uid;

      const contactRef = ref(database, `register/${cardID}/${uid}`);

      await set(contactRef, {
        fullname,
        email,
        phoneNumber,
        question,
        cardID,
        createdAt: new Date().toISOString(),
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// __________________fetch cards with pagination

export const fetchCardsPaginated = createAsyncThunk(
  'cards/fetchCardsPaginated',
  async ({ lastKey = null }, thunkAPI) => {
    try {
      const cardsRef = ref(database, 'cards');

      const cardsQuery = lastKey
        ? query(cardsRef, orderByKey(), startAfter(lastKey), limitToFirst(4))
        : query(cardsRef, orderByKey(), limitToFirst(4));

      const snapshot = await get(cardsQuery);

      if (snapshot.exists()) {
        const data = snapshot.val();

        const cardsArray = Object.keys(data).map(id => ({
          id,
          ...data[id],
        }));

        const result = {
          cards: cardsArray,
          lastKey: cardsArray[cardsArray.length - 1]?.id || null,
        };

        return result;
      } else {
        return thunkAPI.rejectWithValue('No data available');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// __________________fetch filtered cards__________________________________________________________

// export const fetchFilteredcards = createAsyncThunk(
//   'cards/fetchFilteredcards',
//   async (
//     { lastKey = null, selectedLanguage, selectedLevel, selectedPrice },
//     thunkAPI
//   ) => {
//     try {
//       const cardsRef = ref(database, 'cards');
//       let cardsQuery = cardsRef;

//       if (selectedLanguage) {
//         cardsQuery = query(
//           cardsRef,
//           orderByChild('languages'),
//           equalTo(selectedLanguage)
//         );
//       }
//       if (selectedLevel) {
//         cardsQuery = query(
//           cardsRef,
//           orderByChild('levels'),
//           equalTo(selectedLevel)
//         );
//       }
//       if (selectedPrice) {
//         cardsQuery = query(
//           cardsRef,
//           orderByChild('price_per_hour'),
//           equalTo(parseInt(selectedPrice))
//         );
//       }

//       const cardsPaginatedQuery = lastKey
//         ? query(cardsQuery, startAfter(lastKey), limitToFirst(4))
//         : query(cardsQuery, limitToFirst(4));

//       const snapshot = await get(cardsPaginatedQuery);

//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         const cardsArray = Object.keys(data).map(id => ({
//           id,
//           ...data[id],
//         }));

//         const result = {
//           cards: cardsArray,
//           lastKey: cardsArray[cardsArray.length - 1]?.id || null,
//         };
//         return result;
//       } else {
//         return thunkAPI.rejectWithValue('No data available');
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
