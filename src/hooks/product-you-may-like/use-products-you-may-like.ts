import { getProductsYouMayLike } from "@/lib/services/products-you-may-like.service";
import { useQuery } from "@tanstack/react-query";

type TSearchParams = {
  limit: number;
  fields: string;
};

export function useProductsYouMayLike({ limit, fields }: TSearchParams) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["mayLike"],
    queryFn: () => getProductsYouMayLike({ limit, fields }),
    staleTime: 60 * 1000,
  });

  return { youLike: data, youLikeError: error, youLikeLoading: isLoading };
}
