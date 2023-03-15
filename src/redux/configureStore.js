import { configureStore, combineReducers } from '@reduxjs/toolkit';
import servicesSlice from './serviceSlice';
import reservationSlice from './reservationSlice';
import authSlice from './auth/authSlice';
import selectDropdownSlice from './selectDropdownSlice';

const rootReducer = combineReducers({
  reservation: reservationSlice,
  services: servicesSlice,
  auth: authSlice,
  selectDropdown: selectDropdownSlice, // Add the selectDropdownSlice to the rootReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
