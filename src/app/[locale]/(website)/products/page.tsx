import ProductsList from "./_components/products-list";
import OccasionFilter from "./_components/occasion-filter";
import PriceFilter from "./_components/price-filter";
import Category from "./_components/category";
import Rating2 from "./_components/rating";
import ResetAllQueryParams from "./_components/reset-all-query-params";

export default function ProductsPage() {
  return (
    <main className="gap-6 grid grid-cols-10 mx-auto mt-16 mb-44 max-w-[91.5%]">
      {/* Filtration Sidebar  */}
      <aside className="col-span-3 h-full border-e border-zinc-100 dark:border-zinc-700 pe-[21px]">
        <Category />
        <OccasionFilter />
        <Rating2 />
        <PriceFilter />
        <ResetAllQueryParams />
      </aside>
      {/* Products list */}
      <div className="col-span-7 min-h-114">
        <ProductsList />
      </div>
    </main>
  );
}
