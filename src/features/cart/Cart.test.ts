import { describe, expect, it } from "vitest";
import cartReducer, { add, deleteItem, clear } from "./cartSlice";
import type { CartItem } from "@/type/order";

describe("cartSlice", () => {
  const sampleItem: CartItem = { id: "1", label: "Burger", quantity: 2 };

  it("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "" })).toEqual({
      itemList: [],
    });
  });

  it("should add item to cart", () => {
    const state = cartReducer(undefined, add(sampleItem));
    expect(state.itemList).toEqual([sampleItem]);
  });

  it("should increase quantity if item exists", () => {
    const initialState = { itemList: [{ ...sampleItem }] };
    const state = cartReducer(
      initialState,
      add({ ...sampleItem, quantity: 1 })
    );
    expect(state.itemList[0].quantity).toBe(3);
  });

  it("should remove item if quantity goes to 0", () => {
    const initialState = { itemList: [{ ...sampleItem }] };
    const state = cartReducer(
      initialState,
      add({ ...sampleItem, quantity: -2 })
    );
    expect(state.itemList).toEqual([]);
  });

  it("should delete item by ID", () => {
    const initialState = { itemList: [sampleItem] };
    const state = cartReducer(initialState, deleteItem(sampleItem.id));
    expect(state.itemList).toEqual([]);
  });

  it("should clear the cart", () => {
    const initialState = { itemList: [sampleItem] };
    const state = cartReducer(initialState, clear());
    expect(state.itemList).toEqual([]);
  });
});
