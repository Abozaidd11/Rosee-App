"use server";

import { EmailStepField, EmailStepResponse, NewPasswordResponse } from "../types/auth";

export async function sendOTPAction(fields: EmailStepField) {
  const response = await fetch(`${process.env.API}/auth/forgotPassword`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const payload: ApiResponse<EmailStepResponse> = await response.json();

  return payload;
}

export async function newPasswordAction(fields: { newPassword: string; email: string }) {
  const response = await fetch(`${process.env.API}/auth/resetPassword`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const payload: ApiResponse<NewPasswordResponse> = await response.json();

  return payload;
}
