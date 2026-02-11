"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionHead, SectionTitle } from "@/components/ui/section-header";

export default function GallerySection() {
  const t = useTranslations("gallery");

  return (
    <section id="gallery" className="w-full px-4 py-8">
      {/* Gallery Header */}
      <div className="mb-12 flex flex-col items-center gap-2">
        <SectionTitle>{t("badge")}</SectionTitle>
        <SectionHead>{t("heading")}</SectionHead>
      </div>

      {/* Gallery Grid */}
      <div className="relative mx-auto h-[1147px] w-full max-w-[1281px]">
        {/* Image 1 - Large Left */}
        <div className="absolute left-0 top-0 h-[617px] w-[418px] overflow-hidden">
          <Image
            src="/assets/images/gallery-1.png"
            alt="Wedding and anniversary gift boxes"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 2 - Top Middle */}
        <div className="absolute left-[431px] top-0 h-[411px] w-[419px] overflow-hidden">
          <Image
            src="/assets/images/gallery-2.png"
            alt="Birthday gift box with red ribbon"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 3 - Top Right */}
        <div className="absolute left-[863px] top-0 h-[411px] w-[418px] overflow-hidden">
          <Image
            src="/assets/images/gallery-3.png"
            alt="Engagement ring box"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 4 - Bottom Left */}
        <div className="absolute left-0 top-[631px] h-[406px] w-[418px] overflow-hidden">
          <Image
            src="/assets/images/gallery-4.png"
            alt="Roses and chocolates"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 5 - Bottom Middle */}
        <div className="absolute left-[431px] top-[426px] h-[611px] w-[419px] overflow-hidden">
          <Image
            src="/assets/images/gallery-5.png"
            alt="Ring box with flowers"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 6 - Bottom Right */}
        <div className="absolute left-[863px] top-[426px] h-[611px] w-[418px] overflow-hidden">
          <Image
            src="/assets/images/gallery-6.png"
            alt="Engagement congratulations card"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
