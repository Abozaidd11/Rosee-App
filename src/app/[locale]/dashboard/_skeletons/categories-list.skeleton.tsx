import { Skeleton } from "@/components/ui/skeleton";

export function CategoriesListSkeleton() {
  return (
    <div className="flex flex-col gap-2 max-h-56 overflow-y-auto">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="border-b border-b-black/10 flex justify-between pb-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-20 rounded-md" />
        </div>
      ))}
    </div>
  );
}
