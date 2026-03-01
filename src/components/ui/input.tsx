"use client";

import * as React from "react";

import { cn } from "@/lib/utils/tailwind-merge";
import { Eye, EyeOff } from "lucide-react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    // state
    const [showPassword, setShowPassword] = React.useState(false);

    const isPassword = type === "password";

    return (
      <div className="relative w-full">
        <input
          type={isPassword && showPassword ? "text" : type}
          className={cn(
            "flex h-12 w-full rounded-lg border border-zinc-300 bg-transparent px-3 text-base shadow-sm transition-colors font-sarabunRegular",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
            "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-50",
            isPassword && "pe-10",
            className
          )}
          ref={ref}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute end-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
            aria-label={showPassword ? "Hide password" : "Show password"}
            tabIndex={-1}
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
