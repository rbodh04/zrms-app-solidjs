import { Component } from "solid-js";

const LocationView: Component = () => {
  return (
    <div class="flex items-center gap-2 px-4 py-2 bg-gray-100 text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.38 0 2.5-1.12 2.5-2.5S13.38 6 12 6s-2.5 1.12-2.5 2.5S10.62 11 12 11zM12 2a9 9 0 00-9 9c0 6.63 9 13 9 13s9-6.37 9-13a9 9 0 00-9-9z" />
      </svg>
      <span class="text-gray-700">
        Deliver to <strong>Ramesh</strong> - 110001
      </span>
    </div>
  );
};

export default LocationView;
