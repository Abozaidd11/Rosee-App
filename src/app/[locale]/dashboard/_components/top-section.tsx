import CategoryStatistics from "./category-statistics";
import OverAllStatistics from "./statistics";

export default async function TopSection() {
  return (
    <section className="gap-6 md:grid grid-cols-12 max-h-80 sm:flex sm:flex-col ">
      {/* Statistics  */}
      <OverAllStatistics />

      {/* Categories  */}
      <CategoryStatistics />
    </section>
  );
}
