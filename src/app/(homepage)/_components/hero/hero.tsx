import React from "react";
import PromoCard from "./promo-card";
import CarouselSection from "./carousel";
import Occasions from "./occasions";
import Features from "./features";

/**
 * Hero Component
 * --------------
 * Main hero section of the homepage.
 * Combines multiple sub-sections:
 * - PromoCard (static promotional content)
 * - CarouselSection (hero image carousel)
 * - Occasions (occasion-based cards)
 * - Features (key selling points)
 */

export default function Hero() {
  return (
    <section className="w-full space-y-6 p-6">
      {/* Banner section: Promo card + Hero carousel */}
      <div className="flex h-full items-center gap-6">
        {/* Promotional static card */}
        <PromoCard />

        {/* Main hero carousel */}
        <CarouselSection />
      </div>

      {/* Occasion-based cards */}
      <Occasions />

      {/* Feature highlights */}
      <Features />
    </section>
  );
}
