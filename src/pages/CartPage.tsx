import { Component } from "solid-js";

// Temporary cart data
const cart = [
  {
    id: 1,
    name: "Smartphone X1",
    price: "₹14,999",
    quantity: 1,
    image: "/images/products/mobile-1.webp",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹2,999",
    quantity: 2,
    image: "/images/products/watch-1.webp",
  },
];

const CartPage: Component = (props) => {
  const calculateTotal = () => {
    return props.cart.reduce((total, item) => total + parseInt(item.price.replace("₹", "")) * item.quantity, 0);
  };

  return (
    <div class="p-4">
      <h2 class="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div class="space-y-4">
        {/* Loop through cart items */}
        {props.cart.map((item) => (
          <div class="flex justify-between items-center p-4 border rounded-lg shadow-sm">
            <div class="flex items-center gap-4">
              <img src={item.image} alt={item.name} class="w-24 h-24 object-contain" />
              <div>
                <h3 class="text-lg font-medium">{item.name}</h3>
                <p class="text-sm text-gray-600">Price: {item.price}</p>
                <p class="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
            </div>
            <button class="text-red-500">Remove</button>
          </div>
        ))}
      </div>

      {/* Cart Total */}
      <div class="mt-6 text-right">
        <p class="text-xl font-semibold">Total: ₹{calculateTotal()}</p>
      </div>

      {/* Checkout Button */}
      <div class="mt-4 flex justify-end">
        <button class="bg-blue-600 text-white px-6 py-2 rounded-lg">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
