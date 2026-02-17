import React from "react";
import { LoginForm } from "./_components/login-form";
import { useTranslations } from "next-intl";

export default function Page() {
  // Translation
  const t = useTranslations("login");

  return (
    <section className="space-y-6 w-full max-w-[25.5rem] mx-auto overflow-auto">
      {/* Welcome message */}
      <p className="w-full pb-4 border-b dark:border-zinc-600 text-center text-5xl text-maroon-700 dark:text-softPink-300 font-edwardianscriptitc">
        {t("title")}
      </p>

      {/* Login form component */}
      <LoginForm />
    </section>
  );
}
