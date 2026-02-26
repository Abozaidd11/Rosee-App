import BestSellingSection from "./_components/best-selling/best-selling-section";
import MostPopularSection from "./_components/most-popular/most-popular-section";
import Testimonials from "./_components/testimonials-section/testimonials";
import Hero from "./_components/hero/hero";
import { SearchParams } from "@/lib/types/global";

type HomePageProps = {
  searchParams: SearchParams;
};

export default function HomePage({ searchParams }: HomePageProps) {
  return (
    <main className="flex flex-col items-center gap-36 mx-auto mt-10 container">
      <Hero />
      {/* Best Selling */}
      <BestSellingSection />

      {/* Popular Products */}
      <MostPopularSection searchParams={searchParams} />

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
}
