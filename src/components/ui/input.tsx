import * as React from "react";

import { cn } from "@/lib/utils/tailwind-merge";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex bg-transparent dark:bg-zinc-700 file:bg-transparent disabled:opacity-50 shadow-sm px-3 border border-zinc-300 dark:border-zinc-600 file:border-0 rounded-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full h-12 font-sarabunRegular file:font-medium dark:text-zinc-50 placeholder:text-muted-foreground file:text-foreground md:text-sm file:text-sm text-base transition-colors disabled:cursor-not-allowed",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
