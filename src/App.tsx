import { Router, Route } from "@solidjs/router";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";


import { createSignal } from "solid-js";

const [cart, setCart] = createSignal([]);

const addToCart = (product) => {
  setCart([...cart(), product]);
};



function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/cart" component={CartPage} />
    </Router>
  );
}

export default App;



// Pass `cart` and `addToCart` through context or props to components.
