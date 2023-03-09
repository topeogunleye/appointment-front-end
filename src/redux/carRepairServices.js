import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  services: [],
  isLoading: true,
};

const SERVICES_URL = 'https://jsonplaceholder.typicode.com/comments';

export const fetchServices = createAsyncThunk('GET_SERVICES', async () => {
  const req = await fetch(SERVICES_URL);
  const res = await req.json();

  return res;
});

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchServices.pending]: (state) => ({ ...state, isLoading: true }),
    [fetchServices.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      services: action.payload,
    }),
    [fetchServices.rejected]: (state) => ({ ...state, isLoading: false }),
  },
});

export default servicesSlice.reducer;
