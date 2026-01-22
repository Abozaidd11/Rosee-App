"use server";
import { VerifyOtpFields } from "@/lib/types/auth-types/forgot-password";

// verify otp
export async function verifyOtp(data: VerifyOtpFields) {
  const res = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const payload = await res.json();
  return payload;
}
