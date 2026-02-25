"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "@/i18n/navigation";

const LABELS: Record<string, string> = {
  categories: "Categories",
  occasions: "Occasions",
  products: "Products",
  account: "Account",
};

export default function DashboardBreadcrumb() {
  // Variales
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const section = segments[0]; // e.g. "dashboard"
  const subpage = segments[1]; // e.g. "categories" | "occasions" | "products"

  const isDashboardRoot = section === "dashboard" && !subpage;

  // BreadCrumb
  return (
    <Breadcrumb className="flex items-center bg-white px-4 h-[4.38rem]">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={"/dashboard"}
            className="flex items-center gap-2 text-gray-500 text-sm"
          >
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>

        {!isDashboardRoot && (
          <>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage className="flex items-center gap-2 text-maroon-600 text-sm">
                {LABELS[subpage]}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
