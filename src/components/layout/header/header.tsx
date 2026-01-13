import Link from "next/link";
import Image from "next/image";
import { Input } from "../../ui/input";
import { Bell, Globe, Heart, ShoppingCart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HeaderNavigation from "./header-navigation";
import MobileNavigation from "./mobile-navigation";
import LoginIcon from "./login-icon";

export default function Header() {
  return (
    <header>
      <div className="mx-auto lg:px-5 xl:px-9 py-4 font-sarabunMedium">
        <div className="flex items-center justify-between px-2 lg:px-0">
          {/* logo */}
          <Link href="/" className="cursor-pointer w-1/4 md:w-auto">
            <Image src="/assets/logo.png" alt="Logo" width={85} height={80} />
          </Link>

          {/* search bar */}
          <div className="hidden md:block sm:w-2/3">
            <Input
              id="search"
              type="text"
              placeholder="What awesome gift are you looking for?"
              className="w-full"
            />
          </div>

          {/* icons */}
          <div className="flex items-stretch justify-end w-3/4 sm:w-auto">
            {/* login */}
            <div className="hidden sm:block">
              <LoginIcon />
            </div>
            {/* mobile toggle */}
            <MobileNavigation />
            {/* icon group */}
            <div className="flex items-center gap-3 border border-zinc-200 dark:border-zinc-700 border-t-0 border-b-0 p-2 sm:p-4">
              {/* wishlist */}
              <Link href="/wishlist" className="cursor-pointer text-zinc-700 dark:text-zinc-50">
                <Heart className="sm:w-6 sm:h-6 w-5 h-5" />
              </Link>
              {/* cart */}
              <Link href="/cart" className="cursor-pointer text-zinc-700 dark:text-zinc-50">
                <ShoppingCart className="sm:w-6 sm:h-6 w-5 h-5" />
              </Link>
              {/* notifications */}
              <Link href="#" className="cursor-pointer text-zinc-700 dark:text-zinc-50">
                <Bell className="sm:w-6 sm:h-6 w-5 h-5" />
              </Link>
            </div>
            {/* language switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer text-zinc-700 dark:text-zinc-50 p-4">
                <Globe className="sm:w-6 sm:h-6 w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/">
                  <DropdownMenuItem>English</DropdownMenuItem>
                </Link>
                <Link href="/ar">
                  <DropdownMenuItem className="text-right font-tajawalMedium">
                    العربية
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      {/* header nav */}
      <div className="mx-auto bg-primary hidden sm:block">
        <HeaderNavigation />
      </div>
    </header>
  );
}
