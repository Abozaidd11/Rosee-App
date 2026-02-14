// src/components/skeletons/orders/order-card-skeleton.tsx

import { Skeleton } from "@/components/ui/skeleton";

export default function OrderCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white">
      {/* Header Skeleton */}
      <div className="bg-[#A6252A] text-white flex items-center justify-between px-6 h-16">
        <Skeleton className="h-7 w-32 bg-white/20" />
        <Skeleton className="h-4 w-48 bg-white/20" />
      </div>

      {/* Content Skeleton */}
      <div className="p-6 bg-gray-50">
        {/* Total + Status Row */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
        </div>

        {/* Payment + Delivery */}
        <div className="mb-6 space-y-2">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-40" />
        </div>

        {/* Products */}
        <div>
          <Skeleton className="h-6 w-32 mb-4" />
          <div className="bg-white rounded-xl p-5">
            <div className="grid md:grid-cols-2 gap-5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex gap-4 items-center bg-gray-50 p-4 rounded-xl border border-gray-200"
                >
                  <Skeleton className="w-24 h-24 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                  <Skeleton className="h-4 w-20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
