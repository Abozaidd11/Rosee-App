"use client";
import * as React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { Eye, EyeOff, Loader2Icon } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { loginSchema } from "@/lib/schemes/login";
import useLogin from "../_hooks/use-login";
import ErrorAlert from "../../_components/error-alert";



export function LoginForm() {
  // Load translations scoped to "login"
  const t = useTranslations("login");

  // Local state to toggle password visibility
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Custom login hook (handles API call, loading & error state)
  const { isPending, error, login } = useLogin();


  // React Hook Form setup
  const form = useForm<z.infer<ReturnType<typeof loginSchema>>>({
    resolver: zodResolver(loginSchema(t)),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  // Form submit handler
  function onSubmit(data: z.infer<ReturnType<typeof loginSchema>>) {
    login(data);
  }

  return (
    <form className="max-w-sm" id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="gap-4">
        {/* Email Field */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="gap-1.5" data-invalid={fieldState.invalid}>
              {/* Email label */}
              <FieldLabel htmlFor="form-rhf-demo-email">{t("email.label")}</FieldLabel>

              {/* Email input */}
              <Input
                {...field}
                id="form-rhf-demo-email"
                aria-invalid={fieldState.invalid}
                placeholder="user@example.com"
                autoComplete="email"
              />

              {/* Validation error message */}
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/*Password Field*/}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="gap-1.5 relative" data-invalid={fieldState.invalid}>
              {/* Password label */}
              <FieldLabel htmlFor="password">{t("password.label")}</FieldLabel>

              <div className="relative">
                {/* Password input with toggle visibility */}
                <Input
                  {...field}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  aria-invalid={fieldState.invalid}
                  placeholder="••••••••"
                  className="pe-8"
                  autoComplete="current-password"
                />

                {/* Toggle password visibility button */}
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  className="absolute inset-y-0 end-2 flex items-center text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {/* Validation error message */}
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      {/* Additional Actions*/}
      <div className="w-full flex flex-col mt-2.5">
        {/* Forgot password link */}
        <Link
          className="font-semibold text-sm text-maroon-700 dark:text-softPink-300 w-full text-end"
          href={"forgot-password"}
        >
          {t("forgotPassword")}
        </Link>

        {/* Remember me checkbox */}
        <Field className="mt-6 gap-2.5" orientation="horizontal">
          <Checkbox id="rememberMe" name="rememberMe" />
          <Label htmlFor="rememberMe">{t("rememberMe")}</Label>
        </Field>

        {/* API / server error alert */}
        {error && <ErrorAlert message={error?.message} />}

        {/* Submit button */}
        <Button
          disabled={isPending}
          type="submit"
          className="mt-9 w-full space-x-2"
          variant={"default"}
        >
          {t("submit")}
          <Loader2Icon className={isPending ? "animate-spin" : "hidden"} />
        </Button>

        {/* Sign up prompt */}
        <span className="text-sm border-t dark:border-zinc-600 text-center pt-4 mt-7">
          {t("noAccount")}

          <Link className="text-maroon-700 dark:text-softPink-300" href={"#"}>
            {" "}
            {t("createAccount")}
          </Link>
        </span>
      </div>
    </form>
  );
}
