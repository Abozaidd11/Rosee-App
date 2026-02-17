"use client";

import { TProductCard } from "@/lib/types/product";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

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
  const { status } = useSession();
  const isUserLoggedIn = status === "authenticated";

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      try {
        setWishlist(JSON.parse(stored));
      } catch (err) {
        console.error("Failed to parse wishlist from localStorage", err);
      }
    }
  }, []);

  const toggleWishlist = (product: TProductCard) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item._id === product._id);

      const updated = exists ? prev.filter((item) => item._id !== product._id) : [...prev, product];

      if (!isUserLoggedIn) {
        localStorage.setItem("wishlist", JSON.stringify(updated));
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
