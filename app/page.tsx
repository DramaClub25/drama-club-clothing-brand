import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandVideo from "@/components/home/BrandVideo";
import TrendingBanner from "@/components/home/TrendingBanner";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="relative">
        <Header />
        <Hero />
        <BrandVideo />
      </div>

      <TrendingBanner />
      

      <BrandStory />

      <FeaturedCollections />

      <FeaturedProducts />

      <Newsletter />

      <Footer />

    </main>
  );
}