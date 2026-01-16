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
          <CarouselItem key={product._id} className="sm:basis-1/2 lg:basis-1/3 ">
            <Link key={product._id} href={`products/${product._id}`}>
              <ProductCard product={product} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Prev */}
      {/* text-maroon-50 - bg-maroon-500  */}
      <CarouselPrevious className="size-10 rounded-3xl bg-maroon-500 bg-[#A6252A] text-maroon-50 text-[#FBEAEA] -left-5" />

      {/* Next */}
      <CarouselNext className="size-10 rounded-3xl bg-maroon-500 bg-[#A6252A] text-maroon-50 text-[#FBEAEA] -right-5" />
    </Carousel>
  );
}
