import { cn } from "@/lib/utils/tailwind-merge";
import * as React from "react";
import { Button } from "../ui/button";

type ErrorBoundaryProps = React.HTMLAttributes<HTMLDivElement> & {
  error?: Error | null;
  onRetry: () => void;
};

const ErrorBoundary = React.forwardRef<HTMLDivElement, ErrorBoundaryProps>(
  ({ error, onRetry, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full flex flex-col items-center justify-center gap-4", className)}
        {...props}
      >
        <p className="text-zinc-500">{error?.message ?? "Something went wrong"}</p>

        <Button
          variant={"destructive"}
          onClick={onRetry}
          className=" bg-[#A6252A] px-5 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          Try again
        </Button>
      </div>
    );
  }
);

ErrorBoundary.displayName = "ErrorBoundary";

export default ErrorBoundary;
