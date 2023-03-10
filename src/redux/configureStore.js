import { configureStore, combineReducers } from '@reduxjs/toolkit';
import servicesSlice from './carRepairServices';
import reservationSlice from './serviceForm';
import authSlice from './auth/authSlice';

const rootReducer = combineReducers({
  reservation: reservationSlice,
  services: servicesSlice,
  auth: authSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
