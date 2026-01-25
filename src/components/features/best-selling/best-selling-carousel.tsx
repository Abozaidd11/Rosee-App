import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/shared/product-card";
import Link from "next/link";
import { getBestSellingProducts } from "@/lib/services/product.service";

export default async function BestSellingCarousel() {
  // Hooks
  const { products } = await getBestSellingProducts();

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {/* Products  */}
        {products.map((product) => (
          <CarouselItem key={product._id} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
            <Link key={product._id} href={`products/${product._id}`}>
              <ProductCard product={product} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Prev */}
      <CarouselPrevious className="-left-5 bg-maroon-600 rounded-3xl size-10 text-maroon-50" />

      {/* Next */}
      <CarouselNext className="-right-5 bg-maroon-600 rounded-3xl size-10 text-maroon-50" />
    </Carousel>
  );
}
