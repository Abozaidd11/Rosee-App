import BestSellingCarousel from "@/components/features/best-selling/best-selling-carousel";
import BestSellingHeading from "./best-selling-heading";
import useBestSellingProducts from "@/hooks/best-selling/use-best-selling-products";
import { Suspense } from "react";
import CarouselFallback from "@/components/shared/carousel-fallback";

export default function BestSellingSection() {
  // Hooks
  const products = useBestSellingProducts();

  return (
    <section className="flex gap-9">
      {/* Text  */}
      <BestSellingHeading />
      {/* Products  */}
      <Suspense fallback={<CarouselFallback />}>
        <BestSellingCarousel products={products} />
      </Suspense>
    </section>
  );
}
