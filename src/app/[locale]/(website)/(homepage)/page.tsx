import BestSellingSection from "../_components/best-selling/best-selling-section";
import MostPopularSection from "../_components/most-popular/most-popular-section";
import Testimonials from "./_components/testimonials-section/testimonials";
import Hero from "./_components/hero/hero";
export default function Home() {
  return (
    <main className="flex flex-col items-center gap-36 mx-auto mt-10 container">
      <Hero />
      {/* Best Selling */}
      <BestSellingSection />

      {/* Popular Products */}
      <MostPopularSection />

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
}
