import { getOrders } from "@/lib/services/orders-services/orders.service";
import { useQuery } from "@tanstack/react-query";

export default function useOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders({ pageParam: 1 }),
  });
}
