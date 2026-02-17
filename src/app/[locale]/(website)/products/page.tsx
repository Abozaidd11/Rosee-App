import Category from "./_components/category";
import ProductsList from "./_components/products-list";
export default function ProductsPage() {
  return (
    <main className="gap-6 grid grid-cols-10 mx-auto mt-16 mb-44 max-w-[91.5%]">
      {/* Filtration Sidebar  */}
      <aside className="col-span-3 h-full border-e border-zinc-100 dark:border-zinc-700 pe-[21px]">
        <Category />
      </aside>
      {/* Products list */}
      <div className="col-span-7">
        <ProductsList />
      </div>
    </main>
  );
}
