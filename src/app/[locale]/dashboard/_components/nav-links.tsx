"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils/tailwind-merge";
import { CalendarHeart, ClipboardList, LayoutDashboard, Package } from "lucide-react";

export const links = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Categories",
    icon: ClipboardList,
    href: "/dashboard/categories",
  },
  {
    label: "Occasions",
    icon: CalendarHeart,
    href: "/dashboard/occasions",
  },
  {
    label: "Products",
    icon: Package,
    href: "/dashboard/products",
  },
];

export default function DashboardNavLinks() {
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
                "flex items-center gap-2 p-2.5 font-bold text-zinc-800 text-lg",
                pathName === link.href
                  ? "rounded-md bg-maroon-50 text-maroon-600"
                  : "focus:rounded-md focus:bg-maroon-50 focus:text-maroon-600"
              )}
            >
              <link.icon />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
