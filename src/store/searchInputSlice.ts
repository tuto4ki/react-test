import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const searchInputSlice = createSlice({
  name: 'form',
  initialState: { value: '' },
  reducers: {
    changeSearchInput(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { changeSearchInput } = searchInputSlice.actions;

export default searchInputSlice.reducer;
