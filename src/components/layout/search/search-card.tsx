import { TProductCard } from "@/lib/types/product";
import { TProduct, TRecommendation } from "@/lib/types/search";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type TCardProps = {
  product: TProduct | TRecommendation | TProductCard;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SearchCard({ product, setOpen }: TCardProps) {
  // Search Card UI
  return (
    <Link
      href={`/products/${product._id}`}
      onClick={() => {
        setOpen(false);
      }}
      className="gap-4 grid grid-cols-11 hover:bg-zinc-50 p-2 border-zinc-100 border-b"
    >
      <Image
        src={product.imgCover}
        alt="product image"
        width={80}
        height={80}
        className="col-span-1 rounded-sm h-20 object-cover"
      />

      <div className="col-span-7">
        <h2 className="font-semibold text-zinc-800 text-sm">{product.title}</h2>
        <p className="font-bold text-zinc-800 text-xl">{product.price} EGP</p>
      </div>

      <p className="flex justify-end items-center self-start gap-1 col-span-3">
        <Star stroke="#FFA508" fill="#FFA508" />{" "}
        <span className="text-black text-sm">
          Rating: <span className="font-medium text-black text-base">{product.rateAvg}/5</span>
        </span>
        <span className="font-medium text-blue-600 text-sm">({product.rateCount} ratings)</span>
      </p>
    </Link>
  );
}
