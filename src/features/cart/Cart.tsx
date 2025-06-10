import { useSelector, useDispatch } from "react-redux";

import Button from "@/components/button";

import { deleteItem, cart } from "./cartSlice";

import "./Cart.scss";


const Cart = () => {
  // useSelector allows us to extract data from the Redux store state
  const currentCart = useSelector(cart);

  // useDispatch returns a function that lets us dispatch actions
  const dispatch = useDispatch();

  return (
    <div className="cart-cmp">
      <h2 className="title">Cart</h2>
      <ul className="list-item">
        {currentCart.map((item) => {
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
        })}
      </ul>

      <Button onClick={() => console.log("TODO")}>Submit</Button>
    </div>
  );
};

export default Cart;
