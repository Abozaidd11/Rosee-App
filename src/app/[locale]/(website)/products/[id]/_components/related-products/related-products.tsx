import { SectionHead } from "@/components/ui/section-header";
import React from "react";
import RelatedCarousel from "./related-carousel";
import { useTranslations } from "next-intl";

export default function RelatedProducts({ id }: { id: string }) {
  // Translation
  const t = useTranslations("related-products");

  return (
    <section className="space-y-4">
      {/* Section Header */}
      <SectionHead size={"sm"}>{t("header")}</SectionHead>

      {/* Section Content */}
      <RelatedCarousel id={id} />
    </section>
  );
}
