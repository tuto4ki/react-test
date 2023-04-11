import { configureStore } from '@reduxjs/toolkit';

import listCardReducer from './listCardSlice';

const store = configureStore({
  reducer: {
    listCard: listCardReducer,
  },
});

export default store;

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
