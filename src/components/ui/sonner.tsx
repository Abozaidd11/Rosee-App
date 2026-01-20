"use client";

import { Check, Info, Loader2Icon, X, TriangleAlertIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <Check className="size-4 text-emerald-700" />,
        info: <Info className="size-4 text-zinc-800" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <X className="size-4 text-red-700" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast: "sonner-toast border text-popover-foreground shadow-lg",

          description: "text-muted-foreground",

          actionButton: "bg-primary text-primary-foreground",

          cancelButton: "bg-muted text-muted-foreground",

          success: "!bg-emerald-50 !border-emerald-700",

          error: "!bg-red-50 !border-red-700",

          info: "!bg-zinc-100 !border-zinc-400",

          warning: "bg-yellow-50 border-yellow-300",
        },
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          // "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
