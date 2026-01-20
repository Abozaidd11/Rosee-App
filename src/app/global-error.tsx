"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error.message);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-col justify-center items-center bg-background px-4 w-full min-h-screen text-foreground">
          <div className="space-y-3 max-w-md text-center">
            <h1 className="font-semibold text-destructive text-2xl tracking-tight">
              Something went wrong
            </h1>
            <p className="text-muted-foreground text-sm">{error.message}</p>
            <Button variant="outline" onClick={reset}>
              Try again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
