import { Suspense } from "react";
import OverAllStatisticsList from "./over-all-statistics-list";
import StatisticsListSkeleton from "../_skeletons/statistics-list.skeleton";

export default function OverAllStatistics() {
  return (
    <section className="p-6 gap-4 col-span-5 grid grid-cols-2 bg-white rounded-2xl">
      <Suspense fallback={<StatisticsListSkeleton />}>
        <OverAllStatisticsList />
      </Suspense>
    </section>
  );
}
