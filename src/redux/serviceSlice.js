import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  services: [],
  isLoading: false,
  error: null,
};

const API_URL = 'http://[::1]:8000/services';

export const postService = createAsyncThunk('postService', async (data) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  const service = await result.data();
  return service;
});

export const fetchService = createAsyncThunk('fetchService', async () => {
  const response = await fetch(API_URL);
  const services = await response.json();
  return services;
});

export const removeService = createAsyncThunk('removeService', async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  const result = await response.json();
  const service = await result.data();
  return service;
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
    [postService.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }),
    [fetchService.pending]: (state) => ({ ...state, isLoading: true }),
    [fetchService.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      services: action.payload,
    }),
    [fetchService.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }),
    [removeService.pending]: (state) => ({ ...state, isLoading: true }),
    [removeService.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      services: state.services.filter((service) => service.id !== action.payload.id),
    }),
    [removeService.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }),
  },
});

export default serviceSlice.reducer;
