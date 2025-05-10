import { Component } from "solid-js";

const SearchBar: Component = () => {
  return (
    <div class="w-full px-4 py-2 bg-white shadow-sm">
      <div class="flex items-center border border-gray-300 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          class="w-full px-4 py-2 text-sm outline-none"
        />
        <button class="bg-blue-500 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M5 11a6 6 0 1112 0 6 6 0 01-12 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
