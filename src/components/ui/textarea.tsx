"use client";

import * as React from "react";
import { cn } from "@/lib/utils/tailwind-merge";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[150px] w-full rounded-lg border border-zinc-300 bg-transparent px-3 py-3",
          "text-base font-sarabunRegular shadow-sm transition-colors",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-50",
          "resize-none md:text-sm",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
