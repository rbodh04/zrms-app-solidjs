// src/components/ProductCard.tsx
import { Component } from "solid-js";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const ProductCard: Component<{ product: Product }> = (props) => {
  return (
    <div class="border rounded-xl shadow-sm p-4 hover:shadow-md transition">
      <img src={props.product.image} alt={props.product.name} class="w-full h-48 object-cover rounded" />
      <h2 class="text-lg font-medium mt-2">{props.product.name}</h2>
      <p class="text-gray-600">${props.product.price.toFixed(2)}</p>
      <button class="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full text-sm">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;