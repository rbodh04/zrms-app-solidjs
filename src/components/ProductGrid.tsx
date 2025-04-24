import { Component } from "solid-js";
import { A } from "@solidjs/router";

const products = [
  {
    id: 1,
    name: "Smartphone X1",
    price: "₹14,999",
    image: "/images/products/smartphone.webp",
  },
  {
    id: 2,
    name: "Laptop Pro",
    price: "₹55,499",
    image: "/images/products/electronics.webp",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: "₹2,999",
    image: "/images/products/smartphone.webp",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: "₹1,499",
    image: "/images/products/electronics.webp",
  },
];

const ProductGrid: Component = () => {
  return (
    <section class="p-4">
      <h2 class="text-xl font-semibold mb-4">Top Deals</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {/* Using Solid.js For loop to render products */}
        <For each={products}>
          {(product) => (
            <div class="border rounded-lg p-2 shadow-sm hover:shadow-md transition duration-200">
              {/* Link to Product Detail page */}
              <A href={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  class="w-full h-36 object-contain mb-2"
                />
                <h3 class="text-sm font-medium">{product.name}</h3>
                <p class="text-blue-600 font-semibold">{product.price}</p>
              </A>
            </div>
          )}
        </For>
      </div>
    </section>
  );
};

export default ProductGrid;
