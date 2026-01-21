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
        className={cn("flex flex-col justify-center items-center gap-4 w-full", className)}
        {...props}
      >
        {/* Error message  */}
        <p className="text-zinc-500">{error?.message ?? "Something went wrong"}</p>

        {/* Try again button  */}
        <Button
          variant={"destructive"}
          onClick={onRetry}
          className="bg-maroon-600 hover:opacity-90 px-5 py-2 font-medium text-white text-sm"
        >
          Try again
        </Button>
      </div>
    );
  }
);

ErrorBoundary.displayName = "ErrorBoundary";

export default ErrorBoundary;
