import * as React from "react";
import { cn } from "@/lib/utils/tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva(
  "text-4xl font-bold font-sarabun text-primary relative dark:text-secondary",
  {
    variants: {
      variant: {
        default: [
          "before:h-4 before:bg-pink-100 before:absolute before:-bottom-0.5 before:-left-0.5 before:rounded-e-full before:-z-10 dark:before:bg-zinc-700",
          "after:h-[0.125rem] after:bg-pink-600 after:absolute after:-bottom-0.5 after:-left-0.5 dark:after:bg-pink-500",
        ],
      },
      size: {
        default: "before:w-[25.13rem] after:w-[9.82rem]",
        sm: "before:w-[9.55rem] after:w-[3.75rem]",
        md: "before:w-[13rem] after:w-[5.19rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const SectionHead = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof headingVariants>
>(({ className, variant, size, ...props }, ref) => {
  return (
    <h2 ref={ref} className={cn(headingVariants({ variant, size, className }))} {...props}></h2>
  );
});
SectionHead.displayName = "SectionHead";

const SectionTitle = React.forwardRef<HTMLHeadingElement, React.ComponentProps<"h1">>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          "text-secondary font-bold font-sarabun uppercase tracking-[0.3rem] dark:text-primary",
          className
        )}
        {...props}
      ></h1>
    );
  }
);
SectionTitle.displayName = "SectionTitle";

export { SectionHead, SectionTitle };
