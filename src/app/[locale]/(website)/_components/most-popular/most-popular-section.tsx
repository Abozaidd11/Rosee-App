import ProductsSection from "@/components/shared/products-section";
import OccasionsFilterLinks from "./occasions-filter-links";
import { getOccasions } from "@/lib/services/occasion.service";

export default async function MostPopularSection() {
  // Functions
  const { occasions } = await getOccasions();

  // Variables
  const defaultOccasionId = occasions[0]._id;
  return (
    <section className="flex flex-col gap-10">
      {/* Header */}
      <header className="flex justify-between items-center">
        {/* Heading */}
        {/* Heading reusable component - text-maroon-700 - text-soft-pink-200 */}
        <h3 className="font-bold text-[#741C21] text-maroon-700 dark:text-[#FFC2D0] dark:text-soft-pink-200 text-4xl leading-none">
          Most Popular
        </h3>

        {/* Occasions Filter */}
        {/* text-maroon-600 */}
        <OccasionsFilterLinks occasions={occasions} />
      </header>

      {/* Products */}
      <ProductsSection defaultOccasionId={defaultOccasionId} />
    </section>
  );
}
