import { OrdersResponse } from "@/lib/types/order";

interface GetOrdersParams {
  pageParam?: number;
  limit?: number;
}

// fetch orders
export async function getOrders({
  pageParam = 1,
  limit = 40,
}: GetOrdersParams): Promise<OrdersResponse> {
  const res = await fetch(`/api/orders?page=${pageParam}&limit=${limit}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    let errorMessage = "Error fetching orders";

    const errorData = await res.json();
    errorMessage = errorData.message || errorMessage;

    throw new Error(errorMessage);
  }

  const data = await res.json();
  return data;
}
