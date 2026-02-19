import { TUserCart } from "../types/cart";

export const getUserCart = async (accessToken: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/cart`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch user cart");

  const payload: ApiResponse<TUserCart> = await response.json();

  if ("error" in payload) throw new Error(payload.error as string);

  return payload;
};