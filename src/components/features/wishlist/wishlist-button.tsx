"use client";

import { useWishlistContext } from "@/components/providers/wishlist/wishlist.provider";
import { useWishlistToAdd, useWishlistToRemove } from "@/hooks/wishlist/use-wishlist";

import { TProductCard } from "@/lib/types/product";
import { cn } from "@/lib/utils/tailwind-merge";
import { HeartMinus, HeartPlus } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

type WishlistButtonProp = { product: TProductCard };

export default function WishlistButton({ product }: WishlistButtonProp) {
  // Translations
  const t = useTranslations("product-listing.wishlist-button");

  //Context
  const { wishlist, toggleWishlist, setWishlist } = useWishlistContext();

  // Hooks
  const { status } = useSession();

  // Mutations
  const { mutateAsync: addToWishlist, isPending: isAdding } = useWishlistToAdd();
  const { mutateAsync: removeFromWishlist, isPending: isRemoving } = useWishlistToRemove();

  // Variables
  const isLoggedIn = status === "authenticated";
  const isWishlisted = wishlist.some((item) => item._id === product._id);
  const isLoading = isAdding || isRemoving;

  // Functions
  const toggleUserWishlist = async () => {
    if (!isLoggedIn) {
      toggleWishlist(product);
      return;
    }

    try {
      if (isWishlisted) {
        await removeFromWishlist(product._id);

        setWishlist((prev) => prev.filter((item) => item._id !== product._id));
      } else {
        await addToWishlist(product._id);

        setWishlist((prev) =>
          prev.some((item) => item._id === product._id) ? prev : [...prev, product]
        );
      }
    } catch (error) {
      console.error("Wishlist update failed", error);
    }
  };

  return (
    <button
      onClick={toggleUserWishlist}
      disabled={isLoading}
      className={cn(
        "group flex justify-center items-center gap-1 px-2 py-2 rounded-full font-medium text-xs transition-all",
        isLoading && "opacity-50 cursor-not-allowed",
        isWishlisted ? " bg-zinc-800  text-zinc-100" : "bg-white  text-maroon-600 "
      )}
    >
      {isWishlisted ? (
        <HeartMinus className="size-4" strokeWidth={1.48} />
      ) : (
        <HeartPlus className="size-4" strokeWidth={1.48} />
      )}

      <span className="opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[150px] whitespace-nowrap transition-all translate-x-[-8px] group-hover:translate-x-0 duration-300 ease-out">
        {isWishlisted ? t("remove") : t("add")}
      </span>
    </button>
  );
}
