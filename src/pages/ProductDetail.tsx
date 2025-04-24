import { useParams } from "@solidjs/router";
import { Component } from "solid-js";

const ProductDetail: Component = (props) => {
  const params = useParams();

  // Temporary product (will connect to store/API later)
  const product = {
    id: params.id,
    name: "Tenzin Sherab",
    description: "6.5” AMOLED Display, 128GB, 64MP Camera",
    price: "₹10",
    image: "/images/products/smartphone.webp",
  };

    // Handle Add to Cart
    const handleAddToCart = () => {
        props.addToCart(product);  // Call the addToCart function passed as prop
      };
    

  return (
    <div class="p-4">
      <div class="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div class="md:w-1/2 w-full">
          <img src={product.image} alt={product.name} class="w-full rounded-lg" />
        </div>

        {/* Product Info */}
        <div class="md:w-1/2 w-full">
          <h1 class="text-2xl font-bold mb-2">{product.name}</h1>
          <p class="text-gray-600 mb-4">{product.description}</p>
          <p class="text-2xl text-blue-600 font-semibold mb-4">{product.price}</p>

          <div class="flex gap-4">
            <button class="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300">
              Add to Cart
            </button>
            <button class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
