"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils/tailwind-merge";
import { imagesCarouselHeroSectionData } from "@/lib/constants/carousel-hero-section.costants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

/**
 * CarouselSection Component
 * -------------------------
 * This component displays a hero carousel with images, navigation dots,
 * and overlay text/buttons.
 *
 * TODOs:
 *    - Active dot color: #A6252A
 *    - Button bg color: #FBEAEA
 *    - Button text color: #741C21
 * - Font usage
 * - Translation
 */

export default function CarouselSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);

  /**
   * Updates the current active slide
   */
  const updateCurrent = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
  }, [api]);

  /**
   * Register carousel event listener for 'select' event
   */
  useEffect(() => {
    if (!api) return;
    updateCurrent();
    api.on("select", updateCurrent);
    return () => {
      api.off("select", updateCurrent);
    };
  }, [api, updateCurrent]);

  return (
    <div className="mx-auto w-full relative max-w-full h-full rounded-2xl flex flex-col overflow-hidden">
      {/* Carousel*/}
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {imagesCarouselHeroSectionData.map((item, index) => (
            <CarouselItem className="relative aspect-[955/440] w-full h-full" key={index}>
              <Image
                src={`/assets/images/${item}`}
                fill
                alt={item}
                className="object-cover rounded-2xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Overlay content */}
      <div className="flex flex-col justify-between p-9 bg-gradient-to-r absolute w-full h-full from-black/80 to-transparent">
        {/* Dots navigation */}
        <div className="flex items-center justify-end gap-2">
          {imagesCarouselHeroSectionData.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn("h-2.5 w-2.5 rounded-full bg-white", {
                "bg-[#A6252A] w-9": current === index + 1, // TODO: تحقق من لون النقطة الفعالة
              })}
            />
          ))}
        </div>

        {/* Hero text and buttons */}
        <section className="w-full flex flex-col justify-end text-white">
          <p className="font-semibold text-4xl">Say It with Flowers</p>
          <p className="h-12  text-base">Elegant gifts for every special moment.</p>
          <div className="flex items-center justify-between">
            {/* Primary CTA */}
            <Link href={"#"}>
              <Button
                className="bg-[#FBEAEA] rounded-md text-[#741C21]" // TODO: تحقق من مطابقة الألوان للـ Design System
                variant="secondary" // TODO: تأكد من Variant Button
              >
                I’m buying!
              </Button>
            </Link>

            {/* Manual navigation arrows */}
            <div className="rounded-full w-fit flex gap-3.5 items-center text-gray-500 bg-[#FBEAEA]">
              {" "}
              {/* TODO: تحقق من اللون */}
              <ChevronLeft
                className="size-8 cursor-pointer hover:text-[#741C21]"
                onClick={() => api?.scrollPrev()}
              />
              <ChevronRight
                className="size-8 cursor-pointer hover:text-[#741C21]"
                onClick={() => api?.scrollNext()}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
