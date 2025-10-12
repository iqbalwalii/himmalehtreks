import Navbar from "./components/Navbar";
import SecondHero from "./components/Herosecond";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CategoryHighlights from "./components/CategoryHighlights";
import BrandStory from "./components/BrandStory";
import FeaturedProducts from "./components/FeaturedProducts";
import NewsletterCTA from "./components/Newsletter";

export default function Home() {
  return (
    <>
      <SecondHero />
      <CategoryHighlights/> 
      <Hero/>
      <BrandStory/>
      <FeaturedProducts/>
      <NewsletterCTA/>
    </>
  );
}
