import { Skeleton } from "@/components/ui/skeleton";

export default function StatisticsListSkeleton() {
  return (
    <div className="p-6 gap-4 col-span-5 grid grid-cols-2 bg-white rounded-2xl">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Skeleton key={idx} className="h-28 rounded-2xl bg-zinc-100 animate-pulse" />
      ))}
    </div>
  );
}
