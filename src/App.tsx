import Cart from "./features/cart";
import Menu from "./components/menu/Menu";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <h1 className="title">Is Cool Lab project</h1>
      <div className="app-container">
        <Menu />
        <Cart />
      </div>
    </div>
  );
}

export default App;
