const categories = [
    { name: "Mobiles", image: "/images/products/smartphone.webp" },
    { name: "Fashion", image: "/images/products/smartphone.webp" },
    { name: "Electronics", image: "/images/products/smartphone.webp" },
    { name: "Home", image: "/images/products/smartphone.webp" },
  ];
  
  const CategoryScroller = () => {
    return (
      <section class="mt-6">
        <h2 class="text-lg font-semibold mb-2">Categories</h2>
        <div class="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <div key={cat.name} class="flex-shrink-0 w-20 text-center">
              <img
                src={cat.image}
                alt={cat.name}
                class="w-16 h-16 mx-auto rounded-full border border-gray-300 object-cover"
              />
              <p class="text-sm mt-1">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default CategoryScroller;
  