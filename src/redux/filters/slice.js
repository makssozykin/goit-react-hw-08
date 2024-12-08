import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filtersReducer = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    contactsFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { contactsFilter } = filtersReducer.actions;

export default filtersReducer.reducer;
