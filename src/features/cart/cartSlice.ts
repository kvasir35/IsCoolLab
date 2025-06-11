import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";
import type { CartItem } from "@/type/order";

interface CartState {
  itemList: CartItem[];
}

const initialState: CartState = {
  itemList: [],
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
    clear: (state) => {
      state.itemList = [];
    },
  },
});

export const { add, deleteItem, clear } = cartSlice.actions;
export default cartSlice.reducer;

export const cart = (state: RootState) => state.cart.itemList;
