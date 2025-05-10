import Navbar from "../components/Navbar";
import HeroBanner from "../components/Herobanner";
import CategoryScroller from "../components/CategoryScroller";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import LocationView from "../components/LocationView";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <LocationView />
      <SearchBar />
      <HeroBanner />
        <CategoryScroller />
        <ProductGrid />
    </>
  );
};

export default HomePage;
