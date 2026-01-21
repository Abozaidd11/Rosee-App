import { Skeleton } from "@/components/ui/skeleton";

type OccasionsFilterSkeletonProps = {
  count?: number;
};

export default function OccasionsFilterSkeleton({ count = 4 }: OccasionsFilterSkeletonProps) {
  return (
    <ul className="flex gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <li key={idx}>
          <Skeleton
            className="
              h-4 
              w-20 
              rounded-md
              bg-zinc-200 
              dark:bg-zinc-700
            "
          />
        </li>
      ))}
    </ul>
  );
}
