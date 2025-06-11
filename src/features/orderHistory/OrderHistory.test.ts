import orderReducer, {
  addOrder,
  clearHistory,
  selectOrderHistory,
} from "./orderSlice";
import type { CartItem } from "@/type/order";
import type { RootState } from "@/app/store";
import { describe, expect, it } from "vitest";

describe("orderSlice", () => {
  const sampleItems: CartItem[] = [
    { id: "1", label: "Burger", quantity: 2 },
    { id: "2", label: "Soda", quantity: 1 },
  ];

  it("should return the initial state", () => {
    expect(orderReducer(undefined, { type: "" })).toEqual({
      history: [],
    });
  });

  it("should add an order to history", () => {
    const state = orderReducer(undefined, addOrder(sampleItems));

    expect(state.history.length).toBe(1);
    expect(state.history[0].items).toEqual(sampleItems);
    expect(state.history[0].id).toBe("1");
    expect(typeof state.history[0].date).toBe("string");
  });

  it("should increment order ID correctly", () => {
    const initialState = {
      history: [
        {
          id: "1",
          date: new Date().toISOString(),
          items: sampleItems,
        },
      ],
    };

    const state = orderReducer(initialState, addOrder(sampleItems));
    expect(state.history[1].id).toBe("2");
  });

  it("should clear the order history", () => {
    const populatedState = {
      history: [
        {
          id: "1",
          date: new Date().toISOString(),
          items: sampleItems,
        },
      ],
    };

    const state = orderReducer(populatedState, clearHistory());
    expect(state.history).toEqual([]);
  });

  it("should select order history from root state", () => {
    const rootState = {
      order: {
        history: [
          {
            id: "1",
            date: "2024-01-01T12:00:00Z",
            items: sampleItems,
          },
        ],
      },
    } as RootState;

    const selected = selectOrderHistory(rootState);
    expect(selected.length).toBe(1);
    expect(selected[0].id).toBe("1");
  });
});
