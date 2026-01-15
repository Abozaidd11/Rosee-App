import { useQuery } from "@tanstack/react-query";
import { getOccasionProducts } from "@/lib/apis/product.api";

export default function useOccasionProducts(id?: string) {
  const { isPending, data, error, refetch } = useQuery({
    queryKey: ["occasion-products", id],
    queryFn: () => getOccasionProducts(id),
  });

  return { isPending, data, error, refetch };
}
