import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";


export const selectNameFilter = state => state.filter.name;
export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  );

