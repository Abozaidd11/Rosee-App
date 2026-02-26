import { TProduct } from "@/lib/types/product";
import { Package, Star } from "lucide-react";
import AddToWishlist from "./add-to-wishlist";
import { useTranslations } from "next-intl";
import AddToCartButton from "./add-to-cart";

export default function ProductInfo(product: TProduct) {
  // translation
  const t = useTranslations("product-page");

  const leftInStock = (product?.quantity ?? 0) - (product?.sold ?? 0);
  const outOfStock = (product?.quantity ?? 0) - (product?.sold ?? 0) === 0;

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="font-semibold text-xl lg:text-3xl text-zinc-800 dark:text-zinc-50 mb-2">
          {product?.title}
        </h1>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-xs sm:text-lg lg:text-3xl">
            {product?.price && (
              <del className="font-bold text-zinc-300 dark:text-zinc-500">{product?.price}</del>
            )}
            <span className="font-bold text-zinc-800 dark:text-zinc-50">
              {product?.priceAfterDiscount} {t("EGP")}
            </span>
          </span>
          <div className="bg-zinc-100 dark:bg-zinc-700 px-4 py-2 flex items-center justify-center rounded-full">
            <span className="flex items-center gap-2">
              {leftInStock > 0 ? (
                <>
                  <Package size={20} className="text-zinc-500 dark:text-zinc-300" />
                  <span className="font-medium text-xs md:text-sm text-zinc-800 dark:text-zinc-50">
                    {leftInStock} {t("left-in-stock")}
                  </span>
                </>
              ) : (
                <>
                  <Package size={20} className="text-red-600" />
                  <span className="font-medium text-sm text-red-600 dark:text-red-600">
                    {t("out-of-stock")}
                  </span>
                </>
              )}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-8 text-xs sm:text-base">
          <Star size={20} className="fill-yellow-400 border-none text-yellow-400" />
          {product?.rateAvg > 0 ? (
            <div className="flex items-center gap-1">
              <span className="text-zinc-800 dark:text-zinc-50">
                {t("rating")}: <span className="font-medium">{product?.rateAvg}/5</span>
              </span>

              <span className="text-blue-600 dark:text-blue-400 font-medium">
                ({product?.rateCount} {t("ratings")})
              </span>
            </div>
          ) : (
            <span className="text-zinc-800 dark:text-zinc-50 font-medium">
              {t("No-ratings-yet")}
            </span>
          )}
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-base h-44 lg:h-72 overflow-y-auto hide-scroll mt-8">
          {product?.description}
        </p>
      </div>
      {/* add to wishlist & cart */}
      <div className="flex items-center gap-2 mt-4">
        <AddToWishlist wishlist={product?.isInWishlist} />
        <AddToCartButton outOfStock={outOfStock} product={product?._id} />
      </div>
    </div>
  );
}
