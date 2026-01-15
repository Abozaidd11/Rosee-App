import ProductsSection from "@/components/shared/products-section";
import OccasionsFilterLinks from "./occasions-filter-links";
import { TOccasion } from "@/lib/types/occasion";

const occasions: TOccasion[] = [
  { name: "Wedding", _id: "673b34c21159920171827ae0" },
  { name: "Anniversary", _id: "673b35c01159920171827aed" },
  { name: "Birthday", _id: "673b354b1159920171827ae8" },
  { name: "Engagement", _id: "673b38641159920171827b1d" },
];
export default function MostPopularSection() {
  return (
    <section className="flex flex-col gap-10">
      {/* Header */}
      <header className="flex justify-between items-center">
        {/* Heading */}
        {/* Heading reusable component - text-maroon-700 - text-soft-pink-200 */}
        <h3 className="font-bold text-4xl leading-none text-maroon-700 text-[#741C21] dark:text-soft-pink-200 dark:text-[#FFC2D0]">
          Most Popular
        </h3>
        {/* Occasions Filter */}
        {/* text-maroon-600 */}
        <OccasionsFilterLinks occasions={occasions} />
      </header>
      {/* Products */}
      <ProductsSection />
    </section>
  );
}
