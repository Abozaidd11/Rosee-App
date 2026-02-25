import { getDecodedToken } from "@/hooks/shared/use-decoded-token";
import { TOverAllStatistics } from "@/lib/types/statistics";

export async function getOverAllStatistics() {
  const token = await getDecodedToken();

  const response = await fetch(`${process.env.API}/statistics/overall`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Get Overall Statistics Failed");
  }

  const payload: ApiResponse<TOverAllStatistics> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}
