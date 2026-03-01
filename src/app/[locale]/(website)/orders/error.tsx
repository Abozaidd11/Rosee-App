"use client";
import { useTranslations } from "next-intl";

interface OrdersErrorProps {
  error: Error;
  reset: () => void;
}

export default function OrdersError({ error, reset }: OrdersErrorProps) {
  // Translation
  const t = useTranslations("orders");

  // Functions
  const handleRetry = () => reset();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-[146px] mx-auto">
        <h1 className="text-5xl font-bold font-primary leading-none text-gray-800 mb-6">
          {t("title")}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center py-6">
        <div className="text-red-500 mb-4">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h2 className="text-lg font-semibold mb-2 text-gray-800">{t("failed-to-load")}</h2>
        <p className="text-gray-600 mb-4">{error.message || t("try-again")}</p>
        <button
          onClick={handleRetry}
          className="inline-block px-6 py-2 bg-[#A6252A] text-white rounded hover:bg-[#8B1F23] transition"
        >
          {t("retry")}
        </button>
      </div>
    </div>
  );
}
