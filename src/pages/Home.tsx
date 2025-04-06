import ProductCard from "../components/ProductCard";

const dummyProducts = [
  {
    id: 1,
    title: "Cool Hoodie",
    price: 49.99,
    image: "https://picsum.photos/300/200",
  },
  {
    id: 2,
    title: "Classic Sneakers",
    price: 89.99,
    image: "https://picsum.photos/id/1003/300/200",
  },
  {
    id: 3,
    title: "Stylish Watch",
    price: 149.99,
    image: "https://picsum.photos/id/1011/300/200",
  },
];

export default function Home() {
  return (
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-4">🔥 Featured Products</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyProducts.map(product => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}