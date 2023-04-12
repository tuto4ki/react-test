import { configureStore } from '@reduxjs/toolkit';

import listCardReducer from './listCardSlice';
import searchInputReducer from './searchInputSlice';
import { productsApi } from './productsApi';

const store = configureStore({
  reducer: {
    listCard: listCardReducer,
    searchInput: searchInputReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
