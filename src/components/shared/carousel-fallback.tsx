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
          <CarouselItem key={idx} className="basis-1/3">
            <ProductCardSkeleton />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Prev button */}
      <CarouselPrevious className="-left-5 bg-maroon-500 rounded-3xl size-10 text-maroon-50" />

      {/* Next button */}
      <CarouselNext className="-right-5 bg-maroon-500 rounded-3xl size-10 text-maroon-50" />
    </Carousel>
  );
}
