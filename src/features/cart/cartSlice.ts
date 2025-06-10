import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  label: string;
  quantity: number;
}

interface CartState {
  itemList: CartItem[];
  status: "idle" | "loading" | "failed";
}

const initialState: CartState = {
  itemList: [],
  status: "idle",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const { id, quantity } = action.payload;
      const existingItem = state.itemList.find((item) => item.id === id);
      if (existingItem) {
        let newQuantity = existingItem.quantity + quantity;

        if (newQuantity <= 0) {
          state.itemList = state.itemList.filter((item) => item.id !== id);
        } else {
          existingItem.quantity = newQuantity;
        }
      } else {
        if (quantity && quantity > 0) {
          state.itemList.push(action.payload);
        }
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const idToDelete = action.payload;
      state.itemList = state.itemList.filter((item) => item.id !== idToDelete);
    },
  },
});

export const { add, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;

import type { RootState } from "../../app/store";
export const cart = (state: RootState) => state.cart.itemList;
