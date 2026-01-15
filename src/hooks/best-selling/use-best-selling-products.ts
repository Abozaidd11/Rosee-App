import { getBestSellingProducts } from "@/lib/apis/product.api";

export default async function useBestSellingProducts() {
  const { products } = await getBestSellingProducts();

  return products;
}
