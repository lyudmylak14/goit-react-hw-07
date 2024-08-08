import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from '../contactsOps';
// import contactsData from '../../contactsData.json';

// const defaultContacts = contactsData;

const initialState = {
  //   items: defaultContacts,
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  //   reducers: {
  // setLoadingStatus: (state, action) => {
  //   state.loading = action.payload;
  // },
  // setErrorStatus: (state, action) => {
  //   state.error = action.payload;
  // },
  // fetchContacts: (state, action) => {
  //   state.items = action.payload;
  // },
  // deleteContact: (state, action) => {
  //   state.items = state.items.filter(item => item.id !== action.payload);
  // },
  //     addContact: (state, action) => {
  //       state.items.push(action.payload);
  //     },
  //   },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContactsThunk.pending, state => {
        state.loading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(deleteContactThunk.rejected, state => {
        state.error = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const {
//   deleteContact,
//   addContact,
//   setLoadingStatus,
//   setErrorStatus,
//   fetchContacts,
// } = contactsSlice.actions;
