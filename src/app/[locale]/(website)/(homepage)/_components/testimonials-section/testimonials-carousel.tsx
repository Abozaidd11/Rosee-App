"use client";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { TTestimonials } from "@/lib/types/testimonials";
import AutoScroll from "embla-carousel-auto-scroll";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import TestimonialCard from "./testimonial-card";

type PageProps = {
  userReviews: TTestimonials[];
};

export default function TestimonialsCarousel({ userReviews }: PageProps) {
  // Variables
  // this variable for increasing the length for testimonials array to make the carousel autoplay work
  const testimonials = [...userReviews, ...userReviews];

  return (
    <Carousel
      className="flex justify-center items-center bg-[#FBEAEA] px-28 h-[34.38rem]"
      plugins={[
        AutoScroll({
          speed: 1,
          startDelay: 200,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
        WheelGesturesPlugin({}),
      ]}
      opts={{
        loop: true,
        dragFree: true,
        direction:
          typeof document !== "undefined" && document.documentElement.dir === "rtl" ? "ltr" : "rtl",
      }}
    >
      <CarouselContent className="items-center pt-20 h-[27.06rem]">
        {testimonials.map((item) => (
          <TestimonialCard key={item._id} item={item} />
        ))}
      </CarouselContent>
    </Carousel>
  );
}
