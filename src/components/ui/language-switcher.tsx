"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathName = usePathname();

  return (
    <Link
      href={pathName}
      locale={locale === "ar" ? "en" : "ar"}
      className="p-2 sm:p-4 ltr:font-ar rtl:font-en dark:text-zinc-50 text-end"
    >
      {locale === "ar" ? "English" : "العربيه"}
    </Link>
  );
}
