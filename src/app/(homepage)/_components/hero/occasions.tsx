import { Badge } from '@/components/ui/badge'
import { OccasionsHeroSectionData } from '@/lib/constants/occasions-hero-section.costants'
import Image from 'next/image'
import React from 'react'

/**
 * Occasions Component
 * ------------------
 * Renders a responsive grid of occasion cards (Wedding, Engagement, Anniversary, etc.)
 * Each card displays a background image with an overlay containing a category badge
 * and a title.
 *
 * TODOs:
 * - Design System:
 *    - Confirm Badge text color: #A6252A
 *    - Confirm overlay gradient opacity and direction (from-black/50 → transparent)
 *    - Confirm Card title
 * - Font usage
 * - Translation
 */

export default function Occasions() {
    return (
        <section
            className="grid w-full gap-6 
            [grid-template-columns:repeat(auto-fit,minmax(16.94rem,1fr))]"
        >
            {OccasionsHeroSectionData.map((item, index) => (
                <div
                    key={index}
                    className="relative w-full aspect-[410/271] rounded-2xl overflow-hidden"
                >
                    {/* Background image */}
                    <Image
                        src={`/assets/images/${item.image}`}
                        fill
                        alt={item.title}
                        className="object-cover"
                    />

                    {/* Overlay content */}
                    <div
                        className="absolute inset-0 flex w-fit flex-col 
                        justify-end gap-2.5 p-6 
                        bg-gradient-to-r from-black/50 to-transparent"
                    >
                        {/* Category badge */}
                        <Badge
                            className="w-fit rounded-full text-[#A6252A]"
                            variant="secondary" // TODO: تحقق من أن الـ variant متوافق مع Design System
                        >
                            {item.category}
                        </Badge>

                        {/* Card title */}
                        <p className="text-2xl font-semibold leading-none text-white">
                            {item.title}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
}
