import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function BestSellingHeading() {
  // Translations
  const t = useTranslations("best-selling");

  return (
    <section className="flex flex-col justify-between max-w-80">
      {/* Text  */}
      <div className="flex flex-col gap-2">
        {/* Best Selling  */}
        <p className="font-bold text-softPink-500 dark:text-maroon-500 uppercase tracking-[.25em]">
          {t("header")}
        </p>
        {/* Headline  */}
        <div className="font-bold dark:text-softPink-200 text-3xl ltr:capitalize leading-none">
          <span className="text-softPink-500 dark:text-maroon-500">{t("title.check-out")}</span>
          <br />
          {t("title.what-everyone")}{" "}
          <span className="text-softPink-500 dark:text-maroon-500">{t("title.buying")}</span>{" "}
          {t("title.right-now")}
        </div>

        <p className="pb-16 text-zinc-500 dark:text-zinc-400 leading-tight">{t("description")}</p>
      </div>

      {/* Button  */}
      <Link
        href="/products"
        className="flex items-center gap-3 bg-maroon-600 dark:bg-softPink-200 px-4 py-2 rounded-xl w-fit text-white dark:text-zinc-800"
      >
        Explore gifts <ArrowRight className="size-4" strokeWidth={1.46} />
      </Link>
    </section>
  );
}
