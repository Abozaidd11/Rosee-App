import Image from "next/image";
import { HeartPlus, ShoppingCart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TProductCard } from "@/lib/types/product";
import { Button } from "../ui/button";

type ProductCardProps = { product: TProductCard };

export default function ProductCard({ product }: ProductCardProps) {
  // Variables
  const { imgCover, title, rateAvg, price, priceAfterDiscount, createdAt, quantity, sold } =
    product;
  const productLifeTime =
    (new Date().getTime() - new Date(createdAt).getTime()) / (1000 * 60 * 60 * 24);
  const isNewProduct = productLifeTime < 7;
  const isHotProduct = sold > 150;
  return (
    <section className="flex flex-col justify-between h-[22.75rem]">
      {/* Cover  */}
      <section className="group relative h-[17rem]">
        {/* Header  */}
        {/* text-maroon-600 */}

        <header className="top-3 z-10 absolute flex justify-between px-3 w-full">
          {/* Add to wishlist */}
          <Button className="bg-white dark:bg-zinc-800 opacity-0 group-hover:opacity-100 p-0 rounded-full size-8 font-medium text-maroon-600 dark:text-white text-xs leading-none">
            <HeartPlus className="size-5 text-inherit" strokeWidth={1.48} />
          </Button>

          {/* New  badge */}
          {isNewProduct && (
            <Badge className="bg-zinc-100 px-3 rounded-full h-4 font-medium text-zinc-700 text-sm uppercase">
              new
            </Badge>
          )}

          {/* Sold out badge */}
          {!quantity && (
            <Badge className="bg-red-600 px-3 rounded-full h-4 font-medium text-[#FFF1F5] text-sm uppercase">
              out of stock
            </Badge>
          )}

          {/* Hot badge - variant=secondary */}
          {isHotProduct && (
            <Badge className="bg-softPink-50 px-3 rounded-full h-4 font-medium text-maroon-600 text-sm uppercase">
              hot
            </Badge>
          )}
        </header>

        {/* Cover  */}
        <Image
          src={imgCover}
          alt="product-cover"
          fill
          sizes="auto"
          priority
          className="rounded-3xl"
          style={{
            objectFit: "cover",
          }}
        />
      </section>

      {/* Details */}
      {/* text-maroon-700 - text-soft-pink-200*/}
      <footer className="font-semibold text-[#741C21] text-maroon-700 dark:text-[#FFC2D0] dark:text-soft-pink-200 text-lg leading-none">
        {title}
        {/* Frame 328  */}
        <div className="flex justify-between items-center pt-3">
          {/* Frame 329 */}
          {/* dark:text-soft-pink-200 */}
          <div className="dark:text-[#FFC2D0] dark:text-soft-pink-200">
            {/* Rating */}
            <div className="flex gap-1 pb-3">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={
                    idx < Math.round(rateAvg)
                      ? "fill-[#FBA707] flex text-[#FBA707] size-4"
                      : "flex text-[#FBA707] size-4"
                  }
                />
              ))}
            </div>

            {`${priceAfterDiscount?.toFixed(2)} EGP`}
            {price && (
              <span className="pl-1 font-medium text-zinc-400 dark:text-zinc-400 line-through">
                {`${price?.toFixed(2)} EGP`}
              </span>
            )}
          </div>

          {/* Add to cart */}
          <Button className="bg-maroon-600 dark:bg-maroon-500 rounded-full size-10">
            <ShoppingCart className="size-6 text-marron-50" strokeWidth={1.48} />
          </Button>
        </div>
      </footer>
    </section>
  );
}
