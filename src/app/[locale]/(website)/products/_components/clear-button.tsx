"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils/tailwind-merge";
import type { ComponentPropsWithoutRef } from "react";

type ClearButtonProps = Omit<
  ComponentPropsWithoutRef<typeof Button>,
  "children"
> & {
  label?: string;
};

export default function ClearButton({
  onClick,
  label = "Reset",
  className,
  ...rest
}: ClearButtonProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn("text-sm !text-red-500", className)}
      onClick={onClick}
      {...rest}
    >
      <X className="h-4 w-4" />
      {label}
    </Button>
  );
}
