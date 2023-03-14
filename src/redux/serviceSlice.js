import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  services: [],
  isLoading: false,
};

const API_URL = 'http://[::1]:8000/services';

export const postService = createAsyncThunk('postService', async (data) => {
  console.log(data)
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  const service = await result.data();
  console.log('service: ', service);
  return result;
});

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: {
    [postService.pending]: (state) => ({ ...state, isLoading: true }),
    [postService.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      services: [...state.services, action.payload],
    }),
    [postService.rejected]: (state) => ({ ...state, isLoading: false }),
  },
});

export default serviceSlice.reducer;
