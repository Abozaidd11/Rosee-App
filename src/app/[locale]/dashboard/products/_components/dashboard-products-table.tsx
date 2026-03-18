import { Suspense } from "react";
import { SearchParams } from "@/lib/types/global";
import DashboardTableBody from "./dashboard-table-body";
import DashboardTableBodySkeleton from "../../_skeletons/dashboard-table-body.skeleton";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils/tailwind-merge";

type DashboardProductsTableProps = {
  searchParams: SearchParams;
};

export default function DashboardProductsTable({ searchParams }: DashboardProductsTableProps) {
  // Translations
  const t = useTranslations("dashboard.products.table-columns");

  // Hooks
  const locale = useLocale();

  return (
    <table className="w-full rounded-lg px-5">
      <thead className="bg-zinc-50 border-b border-black/10 font-inter font-medium text-xs text-zinc-900">
        <tr className={cn(locale === "ar" && "font-tajawal", "text-start capitalize")}>
          <td className="rounded-ss-lg ps-5 h-10">{t("name")}</td>
          <td>{t("price")}</td>
          <td>{t("stock")}</td>
          <td>{t("sales")}</td>
          <td>{t("ratings")}</td>
          <td className="rounded-se-lg"></td>
        </tr>
      </thead>

      <Suspense fallback={<DashboardTableBodySkeleton />}>
        <DashboardTableBody searchParams={searchParams} />
      </Suspense>
    </table>
  );
}
