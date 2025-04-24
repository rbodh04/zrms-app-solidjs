import { Component } from "solid-js";

const HeroBanner: Component = () => {
  return (
    <section class="w-full relative">
      <img
        src="/images/banner/hero-banner.webp"
        alt="Hero Banner"
        class="w-full h-64 object-cover md:h-[500px]"
      />
      <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div class="text-center text-white px-4">
          <h1 class="text-2xl md:text-5xl font-bold mb-2">
            Welcome to ZRMS Store
          </h1>
          <p class="text-sm md:text-lg">
            Shop the latest deals on mobiles, electronics, and more!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
