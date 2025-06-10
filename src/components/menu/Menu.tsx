import { useDispatch } from "react-redux";

import menuData from "./menu.json";

import { add } from "@/features/cart/cartSlice";
import Button from "@/components/button";

import "./Menu.scss";

const Menu = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item: { id: string; label: string }) => {
    dispatch(add({ ...item, quantity: 1 }));
  };

  return (
    <div className="menu-cmp">
      <h2 className="title"> Menu</h2>
      {Object.entries(menuData).map(([category, items]) => (
        <div key={category} className="container">
          <h2 className="cat-title">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>

          <ul className="list-item">
            {items.map((item: { id: string; label: string }) => (
              <li className="item" key={item.id}>
                <div className="label">{item.label} </div>
                <div className="action">
                  <Button onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
