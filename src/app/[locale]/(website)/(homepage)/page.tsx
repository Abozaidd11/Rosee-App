import BestSellingSection from "./(home)/_components/best-selling/best-selling-section";
import MostPopularSection from "./(home)/_components/most-popular/most-popular-section";

import Testimonials from "./_components/testimonials-section/testimonials";

export default function Home() {
  return (
    <main>
      {/* Container  */}
      <div className="mx-auto container">
        {/* Best Selling */}
        <BestSellingSection />
        {/* Popular Products */}
        <MostPopularSection />
      </div>
      <Testimonials />
    </main>
  );
}
