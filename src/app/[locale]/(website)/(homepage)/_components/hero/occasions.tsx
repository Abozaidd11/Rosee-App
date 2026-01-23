import { Badge } from "@/components/ui/badge";
import { OccasionsHeroSectionData } from "@/lib/constants/occasions-hero-section.costants";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

/**
 * Occasions Component
 * ------------------
 * Renders a responsive grid of occasion cards (Wedding, Engagement, Anniversary, etc.)
 * Each card displays a background image with an overlay containing a category badge
 * and a title.
 *
 */

export default function Occasions() {
  const locale = useLocale() as "en" | "ar";

  return (
    <section
      className="grid w-full gap-6
            [grid-template-columns:repeat(auto-fit,minmax(16.94rem,1fr))]"
    >
      {OccasionsHeroSectionData.map((item, index) => (
        <div key={index} className="relative w-full aspect-[410/271] rounded-2xl overflow-hidden">
          {/* Background image */}
          <Image
            src={`/assets/images/${item.image}`}
            fill
            alt={item.title[locale]}
            className="object-cover"
          />

          {/* Overlay content */}
          <div
            className="absolute inset-0 flex w-full flex-col
                        justify-end gap-2.5 p-6
                        bg-gradient-to-r from-black/50 to-transparent"
          >
            {/* Category badge */}
            <Badge className="w-fit rounded-full " variant="secondary">
              {item.category[locale]}
            </Badge>

            {/* Card title */}
            <p className="text-2xl font-semibold leading-none text-white">{item.title[locale]}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
