import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import Button from "@/components/button";
import { deleteItem, cart, clear } from "./cartSlice";
import { addOrder } from "@/features/orderHistory/orderSlice";

import "./Cart.scss";
import Popup from "@/components/popUp/popUp";

const Cart = () => {
  const currentCart = useSelector(cart);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const dispatch = useDispatch();

  const submitCart = () => {
    setIsPopUpOpen(true);
    dispatch(addOrder(currentCart));
    dispatch(clear());
  };

  return (
    <div className="cart-cmp">
      <div className="cart-container">
        <h2 className="title">Cart</h2>
        <ul className="list-item">
          {currentCart.length <= 0 ? (
            <div className="empty">No Item in the Cart</div>
          ) : (
            currentCart.map((item) => {
              return (
                <li className="item" key={item.id}>
                  <div className="label">{item.label}</div>
                  <div className="quantity">{item.quantity}</div>
                  <div className="action">
                    <Button onClick={() => dispatch(deleteItem(item.id))}>
                      Delete
                    </Button>
                  </div>
                </li>
              );
            })
          )}
        </ul>

        <Button className="submit-cart" onClick={() => submitCart()}>
          Submit
        </Button>
      </div>

      <Popup isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)}>
        Order Send
      </Popup>
    </div>
  );
};

export default Cart;
