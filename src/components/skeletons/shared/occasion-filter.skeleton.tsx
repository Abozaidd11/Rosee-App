import { Skeleton } from "@/components/ui/skeleton";

const OCCASION_SKELETON_COUNT = 6;

export default function OccasionFilterSkeleton() {
  return (
    <section>
      <div className="flex flex-wrap">
        {Array.from({ length: OCCASION_SKELETON_COUNT }).map((_, i) => (
          <div key={i} className="w-1/2 overflow-hidden pt-[10px] ps-[5px] pe-[5px] pb-[5px]">
            <div className="relative">
              <Skeleton className="h-[74px] w-full rounded-lg bg-zinc-300 dark:bg-zinc-600" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
