import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

const isProduction = process.env.NODE_ENV === "production";
// Determine the correct cookie name based on environment
const COOKIES_NAME = isProduction ? "__Secure-next-auth.session-token" : "next-auth.session-token";

export async function getDecodedToken() {
  try {
    const cookieStore = cookies();
    const rawToken = cookieStore.get(COOKIES_NAME)?.value;

    if (!rawToken) {
      console.log("No session token found in cookies.");
      return null;
    } // You can also decode it to check validity and payload if needed
    // The 'secret' is required for verification/decryption

    const decodedPayload = await decode({
      secret: process.env.NEXTAUTH_SECRET!, // Use AUTH_SECRET or NEXTAUTH_SECRET
      token: rawToken,
    });

    // console.log("Decoded Token Payload:", decodedPayload);
    // console.log("Raw Token String:", rawToken); // Return the raw token string for use in external APIs if necessary

    return decodedPayload?.accessToken;
  } catch (err) {
    console.error("Error decoding session token:", err);
    return null;
  }
}
