import Navbar from "../components/Navbar";
import HeroBanner from "../components/Herobanner";
import CategoryScroller from "../components/CategoryScroller";
import ProductGrid from "../components/ProductGrid";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
        <CategoryScroller />
        <ProductGrid />
    </>
  );
};

export default HomePage;
