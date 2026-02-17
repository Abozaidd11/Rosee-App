"use client";

import { useWishlistContext } from "@/components/providers/wishlist/wishlist.provider";
import { useWishlistToAdd, useWishlistToRemove } from "@/hooks/wishlist/use-wishlist";

import { TProductCard } from "@/lib/types/product";
import { HeartMinus, HeartPlus } from "lucide-react";
import { useSession } from "next-auth/react";

type WishlistButtonProp = { product: TProductCard };

export default function WishlistButton({ product }: WishlistButtonProp) {
  const { wishlist = [], toggleWishlist, setWishlist } = useWishlistContext();
  const { status } = useSession();
  const isLoggedIn = status === "authenticated";

  // Mutations
  const { mutateAsync: addToWishlist, isPending: isAdding } = useWishlistToAdd();
  const { mutateAsync: removeFromWishlist, isPending: isRemoving } = useWishlistToRemove();

  const isWishlisted = wishlist.some((item) => item._id === product._id);
  const isLoading = isAdding || isRemoving;

  const toggleUserWishlist = async () => {
    if (!isLoggedIn) {
      toggleWishlist(product);
      return;
    }

    try {
      if (isWishlisted) {
        const payload = await removeFromWishlist(product._id);
        setWishlist(payload.products);
      } else {
        await addToWishlist(product._id);
        setWishlist((prev) => [...prev, product]);
      }
    } catch (error) {
      console.error("Wishlist update failed", error);
    }
  };

  return (
    <button
      onClick={toggleUserWishlist}
      disabled={isLoading}
      className={`group flex justify-center items-center gap-1 px-2 py-2 rounded-full font-medium text-xs transition-all
        ${isLoading ? "opacity-50 cursor-not-allowed" : "bg-white dark:bg-zinc-800 text-maroon-600 dark:text-zinc-100"}`}
    >
      {isWishlisted ? (
        <HeartMinus className="size-4" strokeWidth={1.48} />
      ) : (
        <HeartPlus className="size-4" strokeWidth={1.48} />
      )}

      <span className="opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[150px] whitespace-nowrap transition-all translate-x-[-8px] group-hover:translate-x-0 duration-300 ease-out">
        {isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      </span>
    </button>
  );
}
