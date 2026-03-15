"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils/tailwind-merge";
import { CalendarHeart, ClipboardList, LayoutDashboard, Package } from "lucide-react";
import { useTranslations } from "next-intl";

export const links = [
  {
    labelKey: "nav-overview",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    labelKey: "nav-categories",
    icon: ClipboardList,
    href: "/dashboard/categories",
  },
  {
    labelKey: "nav-occasions",
    icon: CalendarHeart,
    href: "/dashboard/occasions",
  },
  {
    labelKey: "nav-products",
    icon: Package,
    href: "/dashboard/products",
  },
];

export default function DashboardNavLinks() {
  // Translations
  const t = useTranslations("dashboard-layout");

  // Hooks
  const pathName = usePathname();

  return (
    <nav className="w-full">
      <ul className="space-y-4">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              className={cn(
                "flex items-center gap-2 p-2.5 font-nunitoSans font-bold text-zinc-800 text-lg",
                pathName === link.href
                  ? "rounded-md bg-maroon-50 text-maroon-600"
                  : "focus:rounded-md focus:bg-maroon-50 focus:text-maroon-600"
              )}
            >
              <link.icon />
              {t(link.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
