import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";
import type { CartItem } from "@/type/order";

interface Order {
  id: string;
  date: string;

  items: CartItem[];
}

interface orderHistoryState {
  history: Order[];
}

const initialState: orderHistoryState = {
  history: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<CartItem[]>) => {
      state.history.push({
        id: state.history.length + 1 + "",
        date: new Date().toISOString(),
        items: action.payload,
      });
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { addOrder, clearHistory } = orderSlice.actions;
export default orderSlice.reducer;

export const selectOrderHistory = (state: RootState) => state.order.history;
