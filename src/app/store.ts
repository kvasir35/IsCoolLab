import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/cart/cartSlice";

// Create the Redux store and register reducers
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// ✅ RootState: represents the entire Redux state tree
export type RootState = ReturnType<typeof store.getState>;

// ✅ AppDispatch: the type for dispatch()
export type AppDispatch = typeof store.dispatch;
