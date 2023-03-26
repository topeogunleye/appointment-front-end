import { createSlice } from '@reduxjs/toolkit';

const selectDropdownSlice = createSlice({
  name: 'selectDropdown',
  initialState: {
    selectedOption: 'New York', // Default selected option
  },
  reducers: {
    setSelectedOption: (state, action) => ({
      // Update the selectedOption state with the payload
      ...state,
      selectedOption: action.payload,
    }),
  },
});

export const { setSelectedOption } = selectDropdownSlice.actions; // Export the action creator

export const handleOptionChange = (selectedOption) => (dispatch) => {
  dispatch(setSelectedOption(selectedOption));
};

export default selectDropdownSlice.reducer; // Export the reducer function
