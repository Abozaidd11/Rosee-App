import ProductsList from "@/components/shared/products-list";
import ProductListSkeleton from "@/components/skeletons/shared/product-list.skeleton";
import { SearchParams } from "@/lib/types/global";
import { Suspense } from "react";

type ProductsPageProps = { searchParams: SearchParams };

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  return (
    <main className="gap-6 grid grid-cols-10 dark:bg-zinc-800 mx-auto mt-16 mb-44 max-w-[91.5%]">
      {/* Filtration Sidebar  */}
      <aside className="col-span-2 bg-black h-full"></aside>

      {/* Content */}
      <div className="space-y-6 col-span-8">
        {/* Products */}
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductsList searchParams={searchParams} className="gap-4 grid-cols-3" />
        </Suspense>

        {/* Pagination */}
        {/* <ProductsPagination /> */}
      </div>
    </main>
  );
}
