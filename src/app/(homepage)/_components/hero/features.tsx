import { FeatureHeroSectionData } from "@/lib/constants/features-hero-section.costants";
import React from "react";

/**
 * Features Component
 * ------------------
 * Displays a list of feature highlights in the hero section.
 * Each feature consists of an icon, a title, and a short description.
 *
 * TODOs:
 * - Design System:
 *    - Confirm background color: #FBEAEA
 *    - Confirm primary accent color: #A6252A
 * - Translation
 */
export default function Features() {
  return (
    <section className="flex flex-wrap justify-between gap-2 bg-[#FBEAEA] p-10 rounded-2xl w-full">
      {FeatureHeroSectionData.map((item, index) => {
        return (
          <div key={index} className="flex items-center gap-4">
            {/* Feature icon */}
            <item.icon
              strokeWidth={""}
              className="bg-[#A6252A] px-3 py-4 rounded-full w-16 h-16 text-white"
            />
            {/* Feature text */}
            <span>
              <p className="font-semibold text-[#A6252A] text-xl">{item.title}</p>
              <p className="text-[#71717A] text-sm">{item.description}</p>
            </span>
          </div>
        );
      })}
    </section>
  );
}
