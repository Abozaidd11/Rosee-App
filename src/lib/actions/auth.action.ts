"use server";

import { RegisterFormFields, RegisterResponse } from "../types/auth";

export async function registerAction(fields: RegisterFormFields) {
  const response = await fetch(`${process.env.API}/auth/signup`, {
    method: "POST",
    body: JSON.stringify({
      firstName: fields.firstName,
      lastName: fields.lastName,
      email: fields.email,
      password: fields.password,
      rePassword: fields.rePassword,
      phone: fields.phone,
      gender: fields.gender,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.log(`Failed to create new account -  ${response.statusText}`);
  }

  const payload: ApiResponse<RegisterResponse> = await response.json();

  return payload;
}
