"use client";

import * as React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// UI
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Icons
import { Eye, EyeOff, Loader2Icon } from "lucide-react";

// Navigation & i18n
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

// Logic
import { loginSchema } from "@/lib/schemes/login";
import useLogin from "../_hooks/use-login";

// Components
import ErrorAlert from "../../_components/error-alert";
import useWishlistToAdd from "@/hooks/wishlist/use-wishlist";

export function LoginForm() {
  // Translation
  const t = useTranslations("login");

  // State
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Hooks
  const { isPending, error, login } = useLogin();
  const { mutateAsync: addUserWishlist } = useWishlistToAdd();

  // Form & validation
  const form = useForm<z.infer<ReturnType<typeof loginSchema>>>({
    resolver: zodResolver(loginSchema(t)),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Functions
  function onSubmit(data: z.infer<ReturnType<typeof loginSchema>>) {
    login(data, {
      onSuccess: async () => {
        const userWishlist = localStorage.getItem("wishlist");

        if (!userWishlist) return;

        const wishlist: string[] = JSON.parse(userWishlist);

        for (const id of wishlist) {
          try {
            await addUserWishlist(id);
          } catch (error) {
            console.error(`Failed to add product ${id} to wishlist`, error);
          }
        }

        localStorage.removeItem("wishlist");
      },
    });
  }

  return (
    <form className="max-w-sm" id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="gap-4">
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="gap-1.5" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-demo-email">{t("email.label")}</FieldLabel>

              <Input
                {...field}
                id="form-rhf-demo-email"
                placeholder="user@example.com"
                autoComplete="email"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="gap-1.5 relative" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">{t("password.label")}</FieldLabel>

              <div className="relative">
                <Input
                  {...field}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="pe-8"
                  aria-invalid={fieldState.invalid}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-pressed={showPassword}
                  className="absolute inset-y-0 end-2 flex items-center text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <div className="w-full flex flex-col mt-2.5">
        <Link
          href="forgot-password"
          className="font-semibold text-sm text-maroon-700 dark:text-softPink-300 text-end"
        >
          {t("forgotPassword")}
        </Link>

        <Field className="mt-6 gap-2.5" orientation="horizontal">
          <Checkbox id="rememberMe" />
          <Label htmlFor="rememberMe">{t("rememberMe")}</Label>
        </Field>

        {error && <ErrorAlert message={error.message} />}

        <Button type="submit" disabled={isPending} className="mt-9 w-full space-x-2">
          {t("submit")}
          <Loader2Icon className={isPending ? "animate-spin" : "hidden"} />
        </Button>

        <span className="text-sm border-t dark:border-zinc-600 text-center pt-4 mt-7">
          {t("noAccount")}
          <Link href="#" className="text-maroon-700 dark:text-softPink-300">
            {" "}
            {t("createAccount")}
          </Link>
        </span>
      </div>
    </form>
  );
}
