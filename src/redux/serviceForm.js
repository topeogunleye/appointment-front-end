import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  formData: [],
  isLoading: false,
};

const SERVICES_URL = 'http://[::1]:8000/reservation';

export const postServices = createAsyncThunk('POST_SERVICES', async (data) => {
  const req = await fetch(SERVICES_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
  const res = await req.json();
  return res;
});

const reservationSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {},
  extraReducers: {
    [postServices.pending]: (state) => ({ ...state, isLoading: true }),
    [postServices.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      formData: action.payload,
    }),
    [postServices.rejected]: (state) => ({ ...state, isLoading: false }),
  },
});

export default reservationSlice.reducer;
