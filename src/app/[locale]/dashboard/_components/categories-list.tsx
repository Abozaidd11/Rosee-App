import { getCategoryStatistics } from "@/lib/services/category.service";
import CategoryItem from "./category-item";

export default async function CategoriesList() {
  // Service
  const categories = await getCategoryStatistics();

  return (
    <div className="flex flex-col gap-2 max-h-56 overflow-y-auto">
      {/* Category */}
      {categories.statistics.map((category, idx) => (
        <CategoryItem key={idx} category={category} />
      ))}
    </div>
  );
}
