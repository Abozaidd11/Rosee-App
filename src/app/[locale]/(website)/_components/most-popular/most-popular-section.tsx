import ProductsSection from "@/components/shared/products-section";
import OccasionsFilterLinks from "./occasions-filter-links";
import { getOccasions } from "@/lib/services/occasion.service";
import { SectionHead } from "@/components/ui/section-header";

export default async function MostPopularSection() {
  // Functions
  const { occasions } = await getOccasions();

  // Variables
  const defaultOccasionId = occasions[0]._id;
  return (
    <section className="flex flex-col gap-10 w-full">
      {/* Header */}
      <header className="flex justify-between items-center">
        {/* Heading */}
        <SectionHead size={"sm"}>Most Popular</SectionHead>

        {/* Occasions Filter */}
        <OccasionsFilterLinks occasions={occasions} />
      </header>

      {/* Products */}
      <ProductsSection defaultOccasionId={defaultOccasionId} />
    </section>
  );
}
