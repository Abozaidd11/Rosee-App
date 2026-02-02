import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/tailwind-merge";

const badgeVariants = cva(
  "inline-flex items-center px-2 py-0.5 rounded-full font-medium text-xs uppercase transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-maroon-600 hover:bg-maroon-700 text-white dark:bg-red-300 dark:hover:bg-red-400 dark:text-zinc-800",
        secondary:
          "bg-maroon-50 hover:bg-maroon-100 text-maroon-600 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-softPink-300",
        subtle:
          "bg-zinc-100 hover:bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-zinc-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
