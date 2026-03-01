import { TStatisticsArray, TStatisticsObject } from "@/lib/types/statistics";
import { getOverAllStatistics } from "../_services/over-all-statistics.service";
import OverAllStatisticsItem from "./over-all-statistics-item";

export default async function OverAllStatisticsList() {
  // Service
  const payload = await getOverAllStatistics();

  // Variables
  const overAllStatisticsArray: TStatisticsArray = Object.entries(payload.statistics).map(
    ([key, value]) => ({
      name: key as keyof TStatisticsObject,
      value: value,
    })
  );

  return overAllStatisticsArray.map((statistics, idx) => (
    <OverAllStatisticsItem key={idx} statistics={statistics} />
  ));
}
