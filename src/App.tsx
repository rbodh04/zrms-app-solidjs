import { Route, Router } from "@solidjs/router";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div class="min-h-screen bg-gray-50 text-gray-800">
      <nav class="p-4 bg-white shadow">
        <a href="/" class="mr-4">Home</a>
        <a href="/cart">Cart</a>
      </nav>

      <Router>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Router>
    </div>
  );
}
