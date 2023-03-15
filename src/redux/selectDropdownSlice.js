import { createSlice } from '@reduxjs/toolkit';

const selectDropdownSlice = createSlice({
  name: 'selectDropdown',
  initialState: {
    selectedOption: 'New York', // Default selected option
  },
  reducers: {
    setSelectedOption: (state, action) => ({
      ...state, selectedOption: action.payload, // Update the selectedOption state with the payload
    }),
  },
});

export const { setSelectedOption } = selectDropdownSlice.actions; // Export the action creator

export default selectDropdownSlice.reducer; // Export the reducer function
