import { getProductReviews } from "@/lib/apis/product-reviews";
import { useQuery } from "@tanstack/react-query";

export function useProductReviews() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["productReviews"],
    queryFn: () => getProductReviews(),
    staleTime: 120 * 1000,
  });

  return { reviewsOfProduct: data, isLoading, error, refetch };
}
