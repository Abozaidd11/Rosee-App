"use client";

import { Link } from "@/i18n/navigation";
import { LoginForm } from "@/app/[locale]/(auth)/login/_components/login-form";

interface LoginPopoverContentProps {
  activeTab: "login" | "register";
  setActiveTab: (tab: "login" | "register") => void;
}

export default function LoginPopoverContent({ activeTab, setActiveTab }: LoginPopoverContentProps) {
  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex">
        <button
          onClick={() => setActiveTab("login")}
          className={`flex-1 h-11 text-center font-semibold transition-colors ${
            activeTab === "login"
              ? "bg-maroon-600 text-white"
              : "bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
          }`}
        >
          Login
        </button>
        <Link
          href="/register"
          className={`flex-1 h-11 flex items-center justify-center font-semibold transition-colors ${
            activeTab === "register"
              ? "bg-maroon-600 text-white"
              : "bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
          }`}
        >
          Register
        </Link>
      </div>

      {/* Content - Use existing LoginForm, hide everything after login button */}
      <div className="p-4 [&_button[type='submit']~*]:hidden">
        <LoginForm />
      </div>
    </div>
  );
}
