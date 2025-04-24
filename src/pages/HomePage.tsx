import Navbar from "../components/Navbar";
import HeroBanner from "../components/Herobanner";
import CategoryScroller from "../components/CategoryScroller";
import ProductGrid from "../components/ProductGrid";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main class="p-4 max-w-7xl mx-auto">
        <HeroBanner />
        <CategoryScroller />
        <ProductGrid />
      </main>
    </>
  );
};

export default HomePage;
