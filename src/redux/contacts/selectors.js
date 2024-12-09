import { createSelector } from '@reduxjs/toolkit';
import { selectFilterContact } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterContact],
  (items, filter) => {
    const nameArr = items.filter(item =>
      item.name.toLowerCase().startsWith(filter.toLowerCase())
    );
    const numberArr = items.filter(item =>
      item.number.trim().split('-').join('').startsWith(filter)
    );
    if (nameArr.length > 0) {
      return nameArr;
    }
    if (numberArr.length > 0) {
      return numberArr;
    }
    return [];
  }
);
