import { createSelector } from '@reduxjs/toolkit';
import { selectFilterNameContact } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterNameContact],
  (items, name) =>
    name
      ? items.filter(item =>
          item.name.toLowerCase().startsWith(name.toLowerCase())
        )
      : items
);
