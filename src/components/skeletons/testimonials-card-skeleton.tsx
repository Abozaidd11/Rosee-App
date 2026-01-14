import { Skeleton } from "@/components/ui/skeleton";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export function TestimonialCardSkeleton() {
  return (
    <Carousel className="flex justify-center items-center bg-[#FBEAEA] w-full h-[34.38rem]">
      <CarouselContent className="items-center gap-2 pt-20 w-full h-[27.06rem]">
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem
            className="flex justify-center items-center lg:basis-1/3 md:basis-1/2"
            key={index}
          >
            <Card className="relative flex flex-col justify-center items-center gap-3 p-5 pt-14 rounded-3xl w-[21.9rem] h-[17rem]">
              {/* Avatar Skeleton */}
              <Skeleton className="bottom-56 absolute border-4 border-white rounded-full w-[7.5rem] h-[7.5rem]" />

              <CardHeader className="items-center">
                {/* Name Skeleton */}
                <Skeleton className="w-40 h-5" />
              </CardHeader>

              <CardContent className="flex flex-col items-center space-y-3 px-0 w-full">
                {/* Rating Skeleton */}
                <div className="flex gap-1">
                  <Skeleton className="rounded-full w-4 h-4" />
                  <Skeleton className="rounded-full w-4 h-4" />
                  <Skeleton className="rounded-full w-4 h-4" />
                  <Skeleton className="rounded-full w-4 h-4" />
                  <Skeleton className="rounded-full w-4 h-4" />
                </div>

                {/* Text Skeleton */}
                <div className="space-y-2 w-full">
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-5/6 h-4" />
                  <Skeleton className="w-4/6 h-4" />
                </div>
              </CardContent>

              <CardFooter className="flex justify-center w-full">
                {/* Date Skeleton */}
                <Skeleton className="w-24 h-3" />
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
