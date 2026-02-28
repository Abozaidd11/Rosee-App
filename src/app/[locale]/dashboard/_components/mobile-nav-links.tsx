"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import React from "react";
import { links } from "./nav-links";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function MobileNavLinks() {
  // Translations
  const t = useTranslations("dashboard");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu size={25} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-2xl"
        side="bottom"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuGroup>
          {links.map((link) => (
            <DropdownMenuItem
              key={link.href}
              className="hover:bg-maroon-50 p-0 hover:rounded-md hover:text-maroon-600"
            >
              <Link
                href={link.href}
                className="flex items-center gap-2 hover:bg-maroon-50 p-2.5 hover:rounded-md w-full font-bold text-zinc-800 hover:text-maroon-600"
              >
                <link.icon size={20} />
                {t(link.labelKey)}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
