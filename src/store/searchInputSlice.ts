import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = (toolkitRaw as any).default ?? toolkitRaw; // eslint-disable-line
import type { PayloadAction } from '@reduxjs/toolkit';

type TStateSearchInputSlice = {
  value: string;
};

const searchInputSlice = createSlice({
  name: 'form',
  initialState: { value: '' },
  reducers: {
    changeSearchInput(state: TStateSearchInputSlice, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { changeSearchInput } = searchInputSlice.actions;

export default searchInputSlice.reducer;
