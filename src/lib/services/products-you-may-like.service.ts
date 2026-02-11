import { TProductDetails } from "../types/search";

type TSearchParams = {
  limit: number;
  fields: string;
};

export async function getProductsYouMayLike({ limit, fields }: TSearchParams) {
  const res = await fetch(
    `https://flower.elevateegy.com/api/v1/products?limit=${limit}&fields=${fields}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Products");
  }

  const payload: ApiResponse<TProductDetails> = await res.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
}
