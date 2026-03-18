import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * PromoCard Component
 * ------------------
 * TODOs:
 *    - Badge text color: #A6252A
 *    - Button bg color: #FBEAEA
 *    - Button text color: #741C21
 * - Font usage
 * - Translation
 */

export default function PromoCard() {
  return (
    <div
      className="relative  w-full  max-w-[18.8125rem] aspect-[301/439] rounded-2xl overflow-hidden bg-black/10 "
    >
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
        <Badge
          className="text-[#A6252A] rounded-full"
          variant="secondary" // TODO: تحقق من Variant مناسب للـ Design System
        >
          Staring from 10.99 EGP
        </Badge>

        {/* Heading / Title */}
        <p className="text-white font-semibold leading-6 text-2xl h-20">
          Special Gifts For The People You Love
        </p>

        {/* Move to Shop Now Page */}
        <Link href={"#"}>
          <Button
            className="bg-[#FBEAEA] rounded-md text-[#741C21]"
            variant="secondary" // TODO: تأكد من Variant Button
          >
            Shop Now
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
