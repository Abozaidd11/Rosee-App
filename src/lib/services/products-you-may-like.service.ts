import { getSession } from "next-auth/react";
import { TRecommendationResponse } from "../types/search";

export async function getProductsYouMayLike() {
  const token = await getSession();

  console.log(token?.user._id);

  console.log(token?.accessToken);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/related/recommendations/${token?.user._id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.accessToken}`,
      },
    }
  );

  console.log(res);

  if (!res.ok) {
    throw new Error("Failed to fetch Products....");
  }

  const payload: ApiResponse<TRecommendationResponse> = await res.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
}
