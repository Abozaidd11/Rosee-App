import { FeatureHeroSectionData } from '@/lib/constants/features-hero-section.costants'
import React from 'react'

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
 * 
 * - Font usage
 * - Translation
 */
export default function Features() {
    return (
        <section className="flex w-full flex-wrap justify-between gap-2 rounded-2xl bg-[#FBEAEA] p-10">
            {FeatureHeroSectionData.map((item, index) => {
                return (
                    <div key={index} className="flex items-center gap-4">
                        {/* Feature icon */}
                        <item.icon
                            strokeWidth={""}
                            className="h-16 w-16 rounded-full bg-[#A6252A] px-3 py-4 text-white"
                        />

                        {/* Feature text */}
                        <span>
                            <p className="text-xl font-semibold text-[#A6252A]">
                                {item.title}
                            </p>
                            <p className="text-sm text-[#71717A]">
                                {item.description}
                            </p>
                        </span>
                    </div>
                )
            })}
        </section>
    )
}
