import { useMutation } from "@tanstack/react-query";
import { addToWishlistAction, removeFromWishlistAction } from "@/lib/actions/wishlist.action";

export function useWishlistToAdd() {
  return useMutation({
    mutationFn: (productId: string) => addToWishlistAction(productId),
  });
}

export function useWishlistToRemove() {
  return useMutation({
    mutationFn: (productId: string) => removeFromWishlistAction(productId),
  });
}
