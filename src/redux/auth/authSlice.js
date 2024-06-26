import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await fetch('https://appointment-6ueu.onrender.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data;
});

export const signup = createAsyncThunk('auth/signup', async (credentials) => {
  const response = await fetch('https://appointment-6ueu.onrender.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setToken: (state, action) => ({
      ...state,
      token: action.payload,
    }),
    setUser: (state, action) => ({
      ...state, user: action.payload,
    }),
    clearAuthState: (state) => ({
      ...state,
      token: null,
      user: null,
      status: 'idle',
      error: null,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => ({
        ...state, status: 'loading',
      }))
      .addCase(login.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        token: action.payload.jwt,
        user: action.payload.user,
      }))
      .addCase(login.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(signup.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(signup.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        token: action.payload.jwt,
        user: action.payload.user,
      }))
      .addCase(signup.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const { setToken, setUser, clearAuthState } = authSlice.actions;

export default authSlice.reducer;
