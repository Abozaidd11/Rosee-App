import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

/**
 * PromoCard Component
 */

export default function PromoCard() {
  const t = useTranslations("promoCardheroSection");
  return (
    <div className="relative  w-full  max-w-[18.8125rem] aspect-[301/439] rounded-2xl overflow-hidden bg-black/10 ">
      {/* Image Background */}
      <Image
        className="object-cover"
        src={"/assets/images/promo-card.png"}
        fill
        alt="promoCard"
        priority
      />

      {/* Content Overlay */}
      <div className="absolute bottom-0 p-6 space-y-2.5">
        {/* Badge */}
        <Badge className="rounded-full" variant="secondary">
          {t("badge")}
        </Badge>

        {/* Heading / Title */}
        <p className="text-white font-semibold leading-6 text-2xl h-20">{t("title")}</p>

        {/* Move to Shop Now Page */}
        <Link href={"#"}>
          <Button className=" rounded-xl " variant="secondary">
            {t("button")}
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
