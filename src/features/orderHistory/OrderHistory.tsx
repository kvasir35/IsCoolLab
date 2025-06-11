import { useDispatch, useSelector } from "react-redux";

import {
  clearHistory,
  selectOrderHistory,
} from "@/features/orderHistory/orderSlice";

import Button from "@/components/button";

import "./OrderHistory.scss";

const OrderHistory = () => {
  const history = useSelector(selectOrderHistory);
  const dispatch = useDispatch();

  return (
    <div className="order-history">
      <h2 className="title">Order History</h2>

      {history.length <= 0 ? (
        <div>No history</div>
      ) : (
        history.map((order) => (
          <>
            <div key={order.id} className="order-container">
              <h3 className="order-title">
                Order on {new Date(order.date).toLocaleString()}
              </h3>

              <ul className="order-item-list">
                {order.items.map((item) => (
                  <li key={item.id} className="item">
                    {item.label} x {item.quantity}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              className="clear-history-btn"
              onClick={() => dispatch(clearHistory())}
            >
              Clear History
            </Button>
          </>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
