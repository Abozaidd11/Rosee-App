"use client";

import { useWishlistToAdd } from "@/hooks/wishlist/use-wishlist";
import { TProductCard } from "@/lib/types/product";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type TWishlistContext = {
  wishlist: TProductCard[];
  toggleWishlist: (product: TProductCard) => void;
  setWishlist: React.Dispatch<React.SetStateAction<TProductCard[]>>;
};

const WishlistContext = createContext<TWishlistContext>({
  wishlist: [],
  toggleWishlist: () => {},
  setWishlist: () => {},
});

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<TProductCard[]>([]);
  const hasSynced = useRef(false);

  const { status } = useSession();
  const { mutateAsync: addUserWishlist } = useWishlistToAdd();

  const isUserLoggedIn = status === "authenticated";

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (!stored) return;

    try {
      setWishlist(JSON.parse(stored));
    } catch (err) {
      console.error("Failed to parse wishlist from localStorage", err);
    }
  }, []);

  useEffect(() => {
    if (!isUserLoggedIn || hasSynced.current) return;

    const stored = localStorage.getItem("wishlist");
    if (!stored) return;

    const syncWishlist = async () => {
      try {
        hasSynced.current = true;

        const localWishlist: TProductCard[] = JSON.parse(stored);

        await Promise.all(
          localWishlist.map((item) =>
            addUserWishlist(item._id).catch((error) => {
              console.error(`Failed to sync product with id => ${item._id}`, error);
            })
          )
        );

        localStorage.removeItem("wishlist");
      } catch (err) {
        console.error("Failed to sync wishlist after login", err);
      }
    };

    syncWishlist();
  }, [isUserLoggedIn, addUserWishlist]);

  const toggleWishlist = (product: TProductCard) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item._id === product._id);

      const updated = exists ? prev.filter((item) => item._id !== product._id) : [...prev, product];

      if (!isUserLoggedIn) {
        localStorage.setItem("wishlist", JSON.stringify(updated));
      } else {
        addUserWishlist(product._id).catch((err) =>
          console.error("Failed to update server wishlist", err)
        );
      }

      return updated;
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlistContext = () => useContext(WishlistContext);
