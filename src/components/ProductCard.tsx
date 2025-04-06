export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div class="shadow rounded p-4">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </div>
  );
}