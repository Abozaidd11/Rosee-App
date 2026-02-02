"use client";

import { useSearchParams } from "next/navigation";
import ProductCard from "./product-card";
import useOccasionProducts from "@/hooks/shared/use-occasion-products";
import ProductCardSkeleton from "../skeletons/shared/product-card.skeleton";
import ErrorBoundary from "./error-boundary";
import { MoveRight, Rose } from "lucide-react";
import { Link } from "@/i18n/navigation";

type ProductsSectionProps = {
  defaultOccasionId: string;
};
export default function ProductsSection({ defaultOccasionId }: ProductsSectionProps) {
  //Hooks
  const occasionId = useSearchParams().get("occasionId") ?? defaultOccasionId;
  const { isPending, data: payload, error, refetch } = useOccasionProducts(occasionId);

  if (error) return <ErrorBoundary onRetry={refetch} error={error} />;

  return (
    <section className="space-y-10">
      {/* Products  */}
      <div className="gap-6 grid grid-cols-4">
        {/* Loading  */}
        {isPending && Array.from({ length: 4 }).map((_, idx) => <ProductCardSkeleton key={idx} />)}

        {/* Data  */}
        {payload?.products.map((product) => (
          <Link key={product._id} href={`products/${product._id}`}>
            <ProductCard product={product} />
          </Link>
        ))}

        {/* No data to display.  */}
        {!isPending && !payload?.products.length && (
          <div className="flex flex-col items-center gap-3 col-span-4 py-20 font-medium text-zinc-500 text-sm leading-none">
            <Rose className="size-12 text-zinc-500" strokeWidth={1.75} />
            No products to display.
          </div>
        )}
      </div>

      {/* View more link   */}
      {payload?.products && payload?.products.length >= 12 ? (
        <Link
          href={`/products?occasionId=${occasionId}`}
          className="flex justify-end items-center gap-2 h-10 font-semibold text-maroon-700 dark:text-softPink-200 capitalize"
        >
          view more
          <MoveRight
            className="content-end size-5 text-maroon-700 dark:text-softPink-200"
            strokeWidth={1.48}
          />
        </Link>
      ) : null}
    </section>
  );
}
