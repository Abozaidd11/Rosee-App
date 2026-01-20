import ProductCardSkeleton from "../skeletons/shared/product-card.skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function CarouselFallback() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, idx) => (
          <CarouselItem key={idx} className="basis-1/3 ">
            <ProductCardSkeleton />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Prev button */}
      {/* bg-maroon-500 - text-maroon-50  */}
      <CarouselPrevious className="size-10 rounded-3xl bg-maroon-500 bg-[#A6252A] text-maroon-50 text-[#FBEAEA] -left-5" />

      {/* Next button */}
      <CarouselNext className="size-10 rounded-3xl bg-maroon-500 bg-[#A6252A] text-maroon-50 text-[#FBEAEA] -right-5" />
    </Carousel>
  );
}
