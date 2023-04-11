import { configureStore } from '@reduxjs/toolkit';

import listCardReducer from './listCardSlice';
import searchInputReducer from './searchInputSlice';

const store = configureStore({
  reducer: {
    listCard: listCardReducer,
    searchInput: searchInputReducer,
  },
});

export default store;

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
