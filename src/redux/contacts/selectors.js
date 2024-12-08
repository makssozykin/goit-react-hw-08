import { createSelector } from '@reduxjs/toolkit';
import { selectFilterContact } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const numberRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterContact],
  (items, filter) => {
    const nameArr = items.filter(item =>
      item.name.toLowerCase().startsWith(filter.toLowerCase())
    );
    const numberArr = items.filter(item => item.number.startsWith(filter));
    return filter.match(nameRegex)
      ? nameArr
      : filter.match(numberRegex)
      ? numberArr
      : items;
  }
);

// items.filter(item => item.number.includes(filter))

// filter
//       ? items.filter(item =>
//           item.name.toLowerCase().startsWith(filter.toLowerCase())
//         )
//       : filter === Number(filter)
//       ? items.filter(item => item.number.includes(filter))
//       : items
