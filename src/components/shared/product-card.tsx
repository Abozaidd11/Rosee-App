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
    <section className="h-[22.75rem] flex flex-col justify-between">
      {/* Cover  */}
      <section className="relative h-[17rem] group ">
        {/* Header  */}
        {/* text-maroon-600 */}
        <header className="absolute w-full flex justify-between top-3 z-10 px-3">
          {/* Add to wishlist */}
          <Button className="opacity-0 group-hover:opacity-100 size-8 bg-white dark:bg-zinc-800 text-maroon-600 text-[#A6252A] dark:text-white font-medium text-xs leading-none p-0 rounded-full">
            <HeartPlus className="text-inherit size-5" strokeWidth={1.48} />
          </Button>
          {/* Badge */}
          {isNewProduct && (
            <Badge className="h-4 px-3 bg-zinc-100 uppercase font-medium text-sm text-zinc-700 rounded-full ">
              new
            </Badge>
          )}
          {!quantity && (
            <Badge className="h-4 px-3 bg-red-600 uppercase font-medium text-sm text-[#FFF1F5] rounded-full">
              out of stock
            </Badge>
          )}
          {/* 
        remains 
        badge variant=secondary
         */}
          {isHotProduct && (
            <Badge className="h-4 px-3 bg-[#FBEAEA] uppercase font-medium text-sm text-[#A6252A] rounded-full">
              hot
            </Badge>
          )}
        </header>
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
      <footer className="text-maroon-700 text-[#741C21] font-semibold text-lg leading-none  dark:text-soft-pink-200 dark:text-[#FFC2D0] ">
        {title}
        {/* Frame 328  */}
        <div className="flex justify-between items-center pt-3">
          {/* Frame 329 */}
          {/* 
        remains 
        dark:text-soft-pink-200
         */}
          <div className="dark:text-soft-pink-200 dark:text-[#FFC2D0]">
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
              <span className="text-zinc-400 font-medium line-through pl-1 dark:text-zinc-400">
                {`${price?.toFixed(2)} EGP`}
              </span>
            )}
          </div>
          {/* Add to cart  */}
          {/* 
           remains 
          text-maroon-50
          bg-maroon-600
         */}
          <button className="rounded-full bg-maroon-600 bg-[#A6252A] bg-maroon-500 dark:bg-[#CD2E33] size-10 dark:bg-maroon-500">
            <ShoppingCart
              className="size-6 text-marron-50 mx-auto text-[#FBEAEA] a"
              strokeWidth={1.48}
            />
          </button>
        </div>
      </footer>
    </section>
  );
}
