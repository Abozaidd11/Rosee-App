"use client";

import { useState } from "react";
import RememberMe from "../../_components/remember-me";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

interface LoginFormFields {
  rememberMe: boolean;
}

export default function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm<LoginFormFields>({
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<LoginFormFields> = async (values) => {
    try {
      const response = await signIn("credentials", {
        rememberMe: rememberMe ? "true" : "false",
        redirect: false,
      });

      if (response?.ok) {
        // Only store if rememberMe is false (for session-only login)
        if (!rememberMe) {
          sessionStorage.setItem("authSession", "true");
        } else {
          // If rememberMe is true, cookie persists, and deletes sessionStorage
          sessionStorage.removeItem("authSession");
        }
      }
    } catch (error) {
      setError("An unexpected error occurred");
    }
  };

  return (
    <div>
      Login Form
      <RememberMe value={rememberMe} onChange={setRememberMe} />
    </div>
  );
}
