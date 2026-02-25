import { TCategory } from "@/lib/types/statistics";

type CategoryItemProps = {
  category: TCategory;
};

export default function CategoryItem({ category: { name, totalProducts } }: CategoryItemProps) {
  return (
    <div className="border-b border-b-black/10 flex justify-between pb-2 text-zinc-800 font-inter">
      {/* Text  */}
      <p>{name}</p>

      {/* Frame 375  */}
      <span className="rounded-md py-1 px-2 font-medium text-sm bg-black/5">
        {totalProducts} Products
      </span>
    </div>
  );
}
