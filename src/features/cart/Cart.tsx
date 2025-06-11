import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import Button from "@/components/button";
import Popup from "@/components/popUp/popUp";

import { deleteItem, add, clear, cart } from "./cartSlice";
import { addOrder } from "@/features/orderHistory/orderSlice";

import TrashIcon from "@/assets/trash.svg";

import "./Cart.scss";

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

                  <div className="action">
                    <Button
                      onClick={() => dispatch(add({ ...item, quantity: -1 }))}
                    >
                      -
                    </Button>

                    <div className="quantity">{item.quantity}</div>
                    <Button
                      onClick={() => dispatch(add({ ...item, quantity: 1 }))}
                    >
                      +
                    </Button>

                    <Button onClick={() => dispatch(deleteItem(item.id))}>
                      <img className="trash-icon" src={TrashIcon} />
                    </Button>
                  </div>
                </li>
              );
            })
          )}
        </ul>

        <Button
          className="submit-cart"
          onClick={() => submitCart()}
          disabled={currentCart.length <= 0}
        >
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
