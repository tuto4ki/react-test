import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IItemCard } from '../type';

type IItemCardState = {
  list: IItemCard[];
};

const initialState: IItemCardState = {
  list: [],
};

const listCardSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addListCard(state, action: PayloadAction<IItemCard>) {
      state.list.push({
        id: action.payload.id,
        view: 0,
        rating: 0,
        images: [],
        name: action.payload.name,
        date: action.payload.date,
        typeRoom: action.payload.typeRoom,
        description: action.payload.description,
        price: action.payload.price,
        likes: action.payload.likes,
        thumbnail: action.payload.thumbnail,
      });
    },
  },
});

export const { addListCard } = listCardSlice.actions;

export default listCardSlice.reducer;
