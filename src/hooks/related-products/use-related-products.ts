import { getRelatedProducts } from "@/lib/apis/related-products";
import { useQuery } from "@tanstack/react-query";

export function useRelatedProducts(id: string) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["related-products", id],
    queryFn: () => getRelatedProducts(id),
    staleTime: 120 * 1000, // 2 minutes
    enabled: !!id,
  });

  return { data, isLoading, error, refetch };
}
