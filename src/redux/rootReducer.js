import { combineReducers } from '@reduxjs/toolkit';
import apiSlice from './apiSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
