// src/components/Navbar.tsx
import { Component } from "solid-js";

const Navbar: Component = () => {
  return (
    <header class="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div class="text-xl font-bold text-blue-600">zrms</div>

      {/* Mobile Menu Icon (Hamburger) */}
      <div class="md:hidden">
        <button class="text-gray-700">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <nav class="hidden md:flex space-x-6 text-gray-700">
        <a href="#" class="hover:text-blue-500">
          Home
        </a>
        <a href="#" class="hover:text-blue-500">
          Categories
        </a>
        <a href="#" class="hover:text-blue-500">
          Products
        </a>
        <a href="#" class="hover:text-blue-500">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
