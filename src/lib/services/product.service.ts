import { TProductCard } from "../types/product";

export async function getBestSellingProducts() {
  const response = await fetch(
    `${process.env.API}/products?limit=6&fields=imgCover,title,rateAvg,price,priceAfterDiscount,createdAt,sold,quantity&sort=-sold`
  );

  const payload: ApiResponse<PaginatedData<TProductCard[]>> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}
