"use client";

import { TOccasion } from "@/lib/types/occasion";
import { cn } from "@/lib/utils/tailwind-merge";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type OccasionsFilterProps = { occasions: TOccasion[] };

export default function OccasionsFilterLinks({ occasions }: OccasionsFilterProps) {
  // Hooks
  const searchParams = useSearchParams();
  const activeOccasionId = searchParams.get("occasionId");

  return (
    // Occasions Filter
    <ul className="flex gap-6">
      {occasions.map(({ name, _id }) => {
        const isActive = activeOccasionId === _id;

        return (
          // Occasions link
          // text-maroon-600 - text-soft-pink-200
          <li
            key={_id}
            className={cn(
              "font-medium capitalize transition-colors cursor-pointer",
              isActive
                ? "text-[#A6252A] dark:text-[#FFC2D0]"
                : "text-zinc-700 dark:text-zinc-400 hover:text-[#A6252A]"
            )}
          >
            <Link href={`?occasionId=${_id}`} className="text-inherit">
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
