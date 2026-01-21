import Testimonials from "./_components/testimonials-section/testimonials";
import Hero from "./_components/hero/hero";
export default function Home() {
  return (
    <main>
      <div className="mx-auto container">
        <Hero />
      </div>
      <Testimonials />
      {/* <div className="mx-auto container"></div> */}
    </main>
  );
}
