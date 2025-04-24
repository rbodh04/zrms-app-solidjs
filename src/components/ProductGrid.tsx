const products = [
    {
      id: 1,
      name: "iPhone 14",
      price: "₹79,999",
      image: "/images/products/smartphone.webp",
    },
    {
      id: 2,
      name: "Samsung S23",
      price: "₹69,999",
      image: "/images/products/smartphone.webp",
    },
    {
      id: 3,
      name: "Sony Headphones",
      price: "₹4,499",
      image: "/images/products/smartphone.webp",
    },
    {
      id: 4,
      name: "Nike Shoes",
      price: "₹3,999",
      image: "/images/products/smartphone.webp",
    },
  ];
  
  const ProductGrid = () => {
    return (
      <section class="mt-6">
        <h2 class="text-lg font-semibold mb-2">Featured Products</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} class="bg-white rounded-lg shadow p-2">
              <img
                src={product.image}
                alt={product.name}
                class="w-full h-40 object-contain mb-2"
              />
              <h3 class="text-sm font-medium">{product.name}</h3>
              <p class="text-sm text-gray-700">{product.price}</p>
              <button class="mt-2 w-full bg-blue-600 text-white text-sm py-1 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProductGrid;
  