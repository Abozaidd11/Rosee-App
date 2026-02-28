import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TProductCard } from "@/lib/types/product";
import { Button } from "../ui/button";
import WishlistButton from "../features/wishlist/wishlist-button";

type ProductCardProps = { product: TProductCard };

export default function ProductCard({ product }: ProductCardProps) {
  // Variables
  const { imgCover, title, rateAvg, price, priceAfterDiscount, createdAt, quantity, sold, _id } =
    product;
  const productLifeTime =
    (new Date().getTime() - new Date(createdAt).getTime()) / (1000 * 60 * 60 * 24);
  const isNewProduct = productLifeTime < 7;
  const isHotProduct = sold > 150;

  return (
    <section className="flex flex-col justify-between h-[22.75rem]">
      {/* Cover  */}
      <section className="relative h-[17rem]">
        {/* Header  */}
        <header className="top-3 z-10 absolute flex justify-between px-3 w-full">
          {/* Add to wishlist */}
          <WishlistButton product={product} />

          {/* New  badge */}
          {isNewProduct && <Badge variant="subtle">new</Badge>}

          {/* Sold out badge */}
          {!quantity && <Badge>out of stock</Badge>}

          {/* Hot badge */}
          {isHotProduct && <Badge variant="secondary">hot</Badge>}
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
      <footer className="font-semibold text-maroon-700 dark:text-softPink-200 text-lg leading-none">
        {title}
        {/* Frame 328  */}
        <div className="flex justify-between items-center pt-3">
          {/* Frame 329 */}
          <div className="dark:text-softPink-200">
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

            {/* Price */}
            {`${priceAfterDiscount?.toFixed(2)} EGP`}

            {/* PriceAfterDiscount */}
            {price && (
              <span className="pl-1 font-medium text-zinc-400 dark:text-zinc-500 line-through">
                {`${price?.toFixed(2)} EGP`}
              </span>
            )}
          </div>

          {/* Add to cart */}
          <Button className="rounded-full size-10">
            <ShoppingCart className="size-6 text-maroon-50" strokeWidth={1.48} />
          </Button>
        </div>
      </footer>
    </section>
  );
}
