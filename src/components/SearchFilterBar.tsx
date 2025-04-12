// src/components/SearchFilterBar.tsx
export default function SearchFilterBar() {
    return (
      <div class="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Search products..."
          class="w-full sm:w-1/2 px-4 py-2 border rounded focus:outline-none"
        />
        <select class="px-4 py-2 border rounded w-full sm:w-auto">
          <option value="">All Categories</option>
          <option value="shoes">Shoes</option>
          <option value="bags">Bags</option>
          <option value="jackets">Jackets</option>
        </select>
      </div>
    );
  }
  