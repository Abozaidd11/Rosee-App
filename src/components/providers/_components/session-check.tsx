"use client";

import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";

// If rememberMe was false and browser was closed, sign out
// SessionStorage is cleared on browser close

export default function SessionCheck() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    // Check if sessionStorage has the rememberMe
    // If not, browser was closed and rememberMe was false
    const hasSession = sessionStorage.getItem("authSession");

    if (!hasSession) {
      // Browser was closed - sign out if rememberMe was false
      signOut({ redirect: false });
    }
  }, [session]);

  return null;
}
