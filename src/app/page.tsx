import BestSellingSection from "./(home)/_components/best-selling/best-selling-section";
import MostPopularSection from "./(home)/_components/most-popular/most-popular-section";

export default function Home() {
  return (
    <main className="dark:bg-zinc-800">
      {/* Container  */}
      <section className="flex flex-col container mx-auto">
        {/* Best Selling */}
        <BestSellingSection />

        {/* Popular Products */}
        <MostPopularSection />
      </section>
    </main>
  );
}
