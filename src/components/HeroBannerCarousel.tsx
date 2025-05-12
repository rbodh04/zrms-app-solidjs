// src/components/HeroBannerCarousel.tsx
import { Component, createSignal, onCleanup, onMount } from "solid-js";

const images = [
  "/images/banner/hero1.webp",
  "/images/banner/hero2.webp",
  "/images/banner/hero3.webp"
];

const HeroBannerCarousel: Component = () => {
  const [current, setCurrent] = createSignal(0);
  let timer: number;

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  onMount(() => {
    timer = window.setInterval(next, 5000); // auto-rotate every 5s
  });
  onCleanup(() => clearInterval(timer));

  return (
    <section class="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        class="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current() * 100}%)` }}
      >
        {images.map((src) => (
          <img
            src={src}
            alt="Hero slide"
            class="w-full flex-shrink-0 h-48 sm:h-64 md:h-80 object-cover"
          />
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={prev}
        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 shadow"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={next}
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 shadow"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots */}
      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, i) => (
          <button
            onClick={() => setCurrent(i)}
            class={`w-2 h-2 rounded-full ${
              current() === i ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBannerCarousel;
