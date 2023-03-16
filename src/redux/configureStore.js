import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import reservationSlice from './reservationSlice';
import servicesSlice from './serviceSlice';
import authSlice, { setToken } from './auth/authSlice';
import selectDropdownSlice from './selectDropdownSlice';

// Middleware to store authentication token in local storage
const saveTokenMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const { token } = store.getState().auth;
  localStorage.setItem('token', token);
  return result;
};

// Middleware to retrieve authentication token from local storage
const loadTokenMiddleware = (store) => {
  const token = localStorage.getItem('user');
  if (token) {
    store.dispatch(setToken(token));
  }
};

const rootReducer = combineReducers({
  reservation: reservationSlice,
  services: servicesSlice,
  auth: authSlice,
  selectDropdown: selectDropdownSlice, // Add the selectDropdownSlice to the rootReducer
});

const middleware = [thunkMiddleware, saveTokenMiddleware, loggerMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

loadTokenMiddleware(store);

export default store;
