import { NextRequest, NextResponse } from "next/server";

/**
 * This endpoint handles the "Remember Me" functionality by modifying the session cookie:
 * 
 * - If rememberMe is TRUE: Keep cookie as httpOnly (secure, 30 days)
 *   → User stays logged in after: Page refresh, Tab close, Browser close, PC restart
 * 
 * - If rememberMe is FALSE: Make cookie NON-httpOnly so JS can detect and delete it
 *   → User stays logged in only on refresh
 *   → Cookie will be deleted when new tab opens without sessionStorage
 */
export async function POST(req: NextRequest) {
  try {
    const { rememberMe } = await req.json();

    const isSecure = process.env.NODE_ENV === "production";
    const cookieName = isSecure
      ? "__Secure-next-auth.session-token"
      : "next-auth.session-token";

    // Get the current session token
    const sessionToken = req.cookies.get(cookieName)?.value;

    if (!sessionToken) {
      return NextResponse.json(
        { error: "No session token found" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true, rememberMe, cookieName });

    // Delete the existing cookie first
    response.cookies.delete(cookieName);

    // Set the new cookie with the appropriate httpOnly setting
    if (rememberMe) {
      // REMEMBER ME = TRUE: httpOnly cookie (30 days, secure)
      response.cookies.set(cookieName, sessionToken, {
        httpOnly: true,
        secure: isSecure,
        sameSite: "lax",
        path: "/",
        maxAge: 30 * 24 * 60 * 60, // 30 days
      });
      
      // Set persistent rememberMe cookie
      response.cookies.set("rememberMe", "true", {
        httpOnly: false,
        secure: isSecure,
        sameSite: "lax",
        path: "/",
        maxAge: 30 * 24 * 60 * 60, // 30 days
      });
    } else {
      // REMEMBER ME = FALSE: NON-httpOnly cookie that expires in 10 seconds
      response.cookies.set(cookieName, sessionToken, {
        httpOnly: false,
        secure: isSecure,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 30, // 30 minutes
      });
      
      // Set SESSION cookie for rememberMe (expires when browser closes)
      response.cookies.set("rememberMe", "false", {
        httpOnly: false,
        secure: isSecure,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 30, // 30 minutes
      });
    }

    console.log("Session type set:", { rememberMe, cookieName });

    return response;
  } catch (error) {
    console.error("Error updating session type:", error);
    return NextResponse.json(
      { error: "Failed to update session type" },
      { status: 500 }
    );
  }
}
