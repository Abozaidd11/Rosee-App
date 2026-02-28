import { Skeleton } from "@/components/ui/skeleton";

export default function SearchCardSkeleton() {
  return (
    <div className="gap-4 grid grid-cols-11 p-2 border-zinc-100 border-b">
      {/* Image skeleton */}
      <Skeleton className="col-span-1 rounded-sm w-20 h-20" />

      {/* Title & Price skeletons */}
      <div className="space-y-2 col-span-7">
        <Skeleton className="rounded w-2/3 h-4" />
        <Skeleton className="rounded w-1/4 h-5" />
      </div>

      {/* Rating section skeleton */}
      <div className="flex justify-end items-center self-start gap-1 col-span-3">
        {/* Star icon skeleton */}
        <Skeleton className="rounded-full w-5 h-5" />
        <Skeleton className="rounded w-20 h-4" />
        <Skeleton className="rounded w-16 h-4" />
      </div>
    </div>
  );
}
