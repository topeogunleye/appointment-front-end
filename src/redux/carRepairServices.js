import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  services: [],
  isLoading: false,
};

const SERVICES_URL = 'http://[::1]:8000/services';

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
