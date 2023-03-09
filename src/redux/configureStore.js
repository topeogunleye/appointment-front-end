import { configureStore, combineReducers } from '@reduxjs/toolkit';
import servicesSlice from './carRepairServices';

const rootReducer = combineReducers({
  services: servicesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
