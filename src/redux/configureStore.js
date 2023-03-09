import { configureStore, combineReducers } from '@reduxjs/toolkit';
import servicesSlice from './carRepairServices';
import reservationSlice from './serviceForm';

const rootReducer = combineReducers({
  reservation: reservationSlice,
  services: servicesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
