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

export default function MobileNavLinks() {
  return (
    <div>
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
            {links.map((link, idx) => (
              <DropdownMenuItem
                key={idx}
                className="hover:bg-maroon-50 p-0 hover:rounded-md hover:text-maroon-600"
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-2 hover:bg-maroon-50 p-2.5 hover:rounded-md w-full font-bold text-zinc-800 hover:text-maroon-600"
                >
                  <link.icon size={20} />
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
