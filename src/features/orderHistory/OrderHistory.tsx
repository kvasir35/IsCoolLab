import { useSelector } from "react-redux";
import { selectOrderHistory } from "@/features/orderHistory/orderSlice";

import "./OrderHistory.scss";

const OrderHistory = () => {
  const history = useSelector(selectOrderHistory);

  return (
    <div className="order-history">
      <h2 className="title">Order History</h2>
      {history.map((order) => (
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
      ))}
    </div>
  );
};

export default OrderHistory;
