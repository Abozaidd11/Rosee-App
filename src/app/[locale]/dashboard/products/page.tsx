import { SearchParams } from "@/lib/types/global";
import DashboardProductsSection from "./_components/dashboard-products-section";

type ProductsPageProps = { searchParams: SearchParams };

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  return <DashboardProductsSection searchParams={searchParams} />;
}
