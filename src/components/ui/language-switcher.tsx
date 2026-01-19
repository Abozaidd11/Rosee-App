"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathName = usePathname();

  return (
    <Link href={pathName} locale={locale === "ar" ? "en" : "ar"}>
      {locale === "ar" ? "English" : "العربيه"}
    </Link>
  );
}
