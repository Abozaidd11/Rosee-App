import { TUserAddress } from "../types/user-address";

export async function getUserAddresses(token: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/addresses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const payload: ApiResponse<{ addresses: TUserAddress[] }> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
}
