import { TProductCard } from "../types/product";

export async function getOccasionProducts(id: string) {
  const params = new URLSearchParams({
    limit: "12",
    fields: "imgCover,title,rateAvg,price,priceAfterDiscount,createdAt,sold,quantity",
    occasion: id,
  });

  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/products?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const payload: ApiResponse<PaginatedData<TProductCard[]>> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}
