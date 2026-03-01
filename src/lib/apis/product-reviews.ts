import { TReviews } from "../types/reviews";

export async function getProductReviews() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/products/673e2e1f1159920171828153/reviews`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Reviews");
  }

  const payload: ApiResponse<TReviews> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
}
