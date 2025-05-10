import { Component } from "solid-js";

const Navbar: Component = () => {
  return (
    <nav class="w-full bg-white px-4 py-3 shadow-md flex items-center justify-between">
      {/* Left side: Hamburger + Logo */}
      <div class="flex items-center gap-2">
        {/* Hamburger Icon */}
        <button aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo */}
        <div class="text-xl font-bold text-blue-600">ZRMS</div>
      </div>

      {/* Right side: Profile + Cart */}
      <div class="flex items-center gap-4 text-gray-700">
        <button aria-label="Profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A9.956 9.956 0 0012 20a9.956 9.956 0 006.879-2.196M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
        <button aria-label="Cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8h12l-2-8M9 21a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
