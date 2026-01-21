"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center items-center px-4 w-full min-h-[60vh]">
      <div className="space-y-4 bg-card shadow-sm px-6 py-5 border rounded-lg w-full max-w-md text-center">
        <h2 className="font-semibold text-destructive text-2xl">Something went wrong</h2>
        <p className="text-muted-foreground text-sm">
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>

        <div className="pt-2">
          <Button variant="outline" size="lg" onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
