import { useState } from "react";

import Cart from "@/features/cart";
import OrderHistory from "@/features/orderHistory";

import Menu from "@/components/menu/Menu";
import Popup from "@/components/popUp/popUp";
import Button from "@/components/button";

import "./App.scss";

const App = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <div className="app">
      <h1 className="title">Is Cool Lab project</h1>
      <div className="app-container">
        <Menu />
        <Cart />
        <Popup isOpen={isHistoryOpen} onClose={() => setIsHistoryOpen(false)}>
          <OrderHistory />
        </Popup>
      </div>

      <Button
        className="open-history-btn"
        onClick={() => setIsHistoryOpen(true)}
      >
        Open History
      </Button>
    </div>
  );
};

export default App;
