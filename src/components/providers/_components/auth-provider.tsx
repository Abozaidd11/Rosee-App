"use client";

import { SessionProvider } from "next-auth/react";
import SessionCheck from "./session-check";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <SessionCheck />
      {children}
    </SessionProvider>
  );
}
