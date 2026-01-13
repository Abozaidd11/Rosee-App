"use client";
import { Button } from "@/components/ui/button";
import LoginIcon from "./login-icon";

import { Sheet, SheetContent, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import HeaderNavigation from "./header-navigation";
import { Menu } from "lucide-react";

export default function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="sm:hidden h-auto">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col justify-between">
        <HeaderNavigation />
        <SheetFooter>
          <LoginIcon />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
