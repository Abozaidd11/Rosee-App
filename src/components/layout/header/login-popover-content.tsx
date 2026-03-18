"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils/tailwind-merge";
import { LoginForm } from "@/app/[locale]/(auth)/login/_components/login-form";

interface LoginPopoverContentProps {
  activeTab: "login" | "register";
  setActiveTab: (tab: "login" | "register") => void;
}

export default function LoginPopoverContent({ activeTab, setActiveTab }: LoginPopoverContentProps) {
  // Translation
  const t = useTranslations("header");

  // Functions
  const handleTabChange = (tab: "login" | "register") => setActiveTab(tab);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex">
        <button
          onClick={() => handleTabChange("login")}
          className={cn(
            "flex-1 h-11 text-center font-semibold transition-colors",
            activeTab === "login"
              ? "bg-maroon-600 text-white"
              : "bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
          )}
        >
          {t("login")}
        </button>
        {/* Navigation */}
        <Link
          href="/register"
          className={cn(
            "flex-1 h-11 flex items-center justify-center font-semibold transition-colors",
            activeTab === "register"
              ? "bg-maroon-600 text-white"
              : "bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
          )}
        >
          {t("register")}
        </Link>
      </div>

      {/* Form */}
      {/* Content - Use existing LoginForm, hide everything after login button */}
      <div
        className={cn(
          "p-4",
          "[&_button[type='submit']~*]:hidden",
          // Input fields: 361x49, radius 10, padding 16, white bg, border #D4D4D8
          "[&_input]:box-border [&_input]:w-[361px] [&_input]:h-[49px] [&_input]:rounded-[10px] [&_input]:px-4 [&_input]:py-4 [&_input]:border [&_input]:border-[#D4D4D8] [&_input]:bg-white",
          // Field gap between label and input: 8px
          "[&_[data-slot='field']]:gap-2",
          // Remember me checkbox: 20x20, circle, border #741C21
          "[&_button[role='checkbox']]:w-5 [&_button[role='checkbox']]:h-5 [&_button[role='checkbox']]:rounded-sm [&_button[role='checkbox']]:border [&_button[role='checkbox']]:border-[#741C21]",
          // Remember me label: Inter 14px regular, line-height 100%, 96x17
          "[&_label[for='rememberMe']]:w-[96px] [&_label[for='rememberMe']]:h-[17px] [&_label[for='rememberMe']]:text-sm [&_label[for='rememberMe']]:font-normal [&_label[for='rememberMe']]:leading-none [&_label[for='rememberMe']]:font-inter [&_label[for='rememberMe']]:whitespace-nowrap",
          // Login button: 361x41, radius 10, bg #A6252A, padding 14px 16px
          "[&_button[type='submit']]:w-[361px] [&_button[type='submit']]:h-[41px] [&_button[type='submit']]:rounded-[10px] [&_button[type='submit']]:bg-[#A6252A] [&_button[type='submit']]:py-[14px] [&_button[type='submit']]:px-4"
        )}
      >
        <LoginForm />
      </div>
    </div>
  );
}
