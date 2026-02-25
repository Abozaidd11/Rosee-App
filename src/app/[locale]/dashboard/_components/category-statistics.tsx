import { Suspense } from "react";
import CategoriesList from "./categories-list";
import { CategoriesListSkeleton } from "../_skeletons/categories-list.skeleton";

export default function CategoryStatistics() {
  return (
    <section className="col-span-7 p-6 space-y-4 rounded-2xl bg-white">
      {/* Heading  */}
      <p className="font-inter font-semibold text-2xl leading-none text-zinc-800">All Categories</p>

      {/* Category list  */}
      <Suspense fallback={<CategoriesListSkeleton />}>
        <CategoriesList />
      </Suspense>
    </section>
  );
}
