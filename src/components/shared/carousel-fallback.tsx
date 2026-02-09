import { cn } from "@/lib/utils/tailwind-merge";
import ProductCardSkeleton from "../skeletons/shared/product-card.skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function CarouselFallback() {
  // Variables
  const carouselSkeletonButtonStyle = "bg-maroon-500 rounded-3xl size-10 text-maroon-50";
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, idx) => (
          <CarouselItem key={idx} className="basis-1/3">
            <ProductCardSkeleton />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Prev button */}
      <CarouselPrevious className={cn("-left-5", carouselSkeletonButtonStyle)} />

      {/* Next button */}
      <CarouselNext className={cn("-right-5", carouselSkeletonButtonStyle)} />
    </Carousel>
  );
}
