import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryKkelton() {
  return (
    <div className="space-y-1 w-full">
      {Array.from({ length: 7 }).map((_, index) => (
        <Skeleton key={index} className="h-7 w-full ">
          <Skeleton className="h-7 w-9 " />
        </Skeleton>
      ))}
    </div>
  );
}
