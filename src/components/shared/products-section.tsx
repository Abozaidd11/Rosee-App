"use client";

import { useSearchParams } from "next/navigation";
import ProductCard from "./product-card";
import useOccasionProducts from "@/hooks/shared/use-occasion-products";
import ProductCardSkeleton from "../skeletons/shared/product-card.skeleton";
import ErrorBoundary from "./error-boundary";
import { MoveRight, Rose } from "lucide-react";
import Link from "next/link";

export default function ProductsSection() {
  //Hooks
  const occasionId = useSearchParams().get("occasionId") ?? undefined;
  const { isPending, data: payload, error, refetch } = useOccasionProducts(occasionId);

  if (error) return <ErrorBoundary onRetry={refetch} error={error} />;

  return (
    <section className="space-y-10">
      {/* Products  */}
      <div className="grid grid-cols-4 gap-6">
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
          <div className="flex flex-col gap-3 items-center font-medium text-zinc-500 text-sm leading-none py-20 col-span-4">
            <Rose className="size-12 text-zinc-500 " strokeWidth={1.75} />
            No products to display.
          </div>
        )}
      </div>
      {/* View More  */}
      {payload?.products && payload?.products.length >= 12 ? (
        <Link
          href={`/products?occasionId=${occasionId}`}
          className="text-maroon-700  text-[#741C21] dark:text-soft-pink dark:text-[#FFC2D0] font-semibold flex items-center justify-end gap-2 capitalize h-10"
        >
          view more
          <MoveRight
            className="text-maroon-700 text-[#741C21] dark:text-soft-pink dark:text-[#FFC2D0] size-5 content-end"
            strokeWidth={1.48}
          />
        </Link>
      ) : null}
    </section>
  );
}
