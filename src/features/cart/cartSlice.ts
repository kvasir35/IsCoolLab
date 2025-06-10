import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// ✅ 1. Define a type for the slice state
interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

// ✅ 2. Set initial state with that type
const initialState: CounterState = {
  value: 0,
  status: "idle",
};

// ✅ 3. Type the payload using PayloadAction
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

// ✅ Type RootState for selector (replace with your actual RootState)
import type { RootState } from "../../app/store";
export const selectCount = (state: RootState) => state.counter.value;
