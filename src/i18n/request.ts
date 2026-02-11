import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { hasLocale } from "next-intl";
import { CURRENCY } from "@/lib/constants/global-constants";

export default getRequestConfig(async ({ requestLocale }) => {
  // Variables
  const requestedLocale = await requestLocale;
  const locale = hasLocale(routing.locales, requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    formats: {
      number: {
        "currency-full": {
          style: "currency",
          currency: CURRENCY,
          currencyDisplay: "name",
          numberingSystem: locale === "ar" ? "arab" : "latn",
        },
        "currency-short": {
          style: "currency",
          currency: CURRENCY,
          currencyDisplay: "symbol",
          numberingSystem: locale === "ar" ? "arab" : "latn",
        },
        "percentage-format": {
          style: "percent",
          numberingSystem: locale === "ar" ? "arab" : "latn",
        },
        "numbers-only": {
          numberingSystem: locale === "ar" ? "arab" : "latn",
        },
      },
      dateTime: {
        short: {
          month: "long",
          year: "numeric",
          day: "numeric",
          numberingSystem: locale === "ar" ? "arab" : "latn",
        },
        full: {
          dateStyle: "full",
          numberingSystem: locale === "ar" ? "arab" : "latn",
        },
        "date-w-time": {
          day: "numeric",
          month: "long",
          year: "numeric",
          minute: "2-digit",
          hour: "2-digit",
          numberingSystem: locale === "ar" ? "arab" : "latn",
        },
      },
    },
  };
});
