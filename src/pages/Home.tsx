// src/pages/HomePage.tsx
import { For } from "solid-js";
import ProductCard from "../components/ProductCard";
import SearchFilterBar from "../components/SearchFilterBar";

const mockProducts = [
  { id: 1, name: "Shoes", price: 49.99, image: "/images/images.jpg" },
  { id: 2, name: "Backpack", price: 89.99, image: "/images/images.jpeg" },
  { id: 3, name: "Jacket", price: 129.99, image: "/images/images.jpeg" },
];

export default function HomePage() {
  return (
    <main class="p-4">
      <h1 class="text-2xl font-semibold text-center mb-4">Welcome to ZRMS Store</h1>
      <SearchFilterBar />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <For each={mockProducts}>
          {(product) => <ProductCard product={product} />}
        </For>
      </div>
    </main>
  );
}
