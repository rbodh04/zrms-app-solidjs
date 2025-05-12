import Navbar from "../components/Navbar";
import HeroBanner from "../components/Herobanner";
import CategoryScroller from "../components/CategoryScroller";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import LocationView from "../components/LocationView";
import HeroBannerCarousel from "../components/HeroBannerCarousel";


const HomePage = () => {
  return (
    <>
      <Navbar />
      <LocationView />
      <SearchBar />
      <HeroBannerCarousel />
      <CategoryScroller />
      <ProductGrid />
    </>
  );
};

export default HomePage;
