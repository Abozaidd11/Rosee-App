import { SectionHead } from "@/components/ui/section-header";
import { useFormatter, useTranslations } from "next-intl";
import { Rating } from "@/components/ui/star-rating";
import { Star } from "lucide-react";

type HeaderProps = {
  rateAvg: number;
  rateCount: number;
};

export default function ReviewsHeader({ rateAvg, rateCount }: HeaderProps) {
  // Translation
  const t = useTranslations("product-reviews");

  const format = useFormatter();

  return (
    <header className="space-y-0.5 col-span-3 pb-6 border-zinc-100 border-b">
      <SectionHead size={"sm"}>{t("header")}</SectionHead>

      <h2 className="font-semibold text-zinc-800 text-xl">{t("second-head")}</h2>

      <p className="font-bold text-zinc-800 text-2xl">
        {t.rich("general-rate", {
          rate: format.number(rateAvg, "numbers-only"),
          count: format.number(rateCount, "numbers-only"),
          span: (chunk) => <span className="font-medium text-zinc-500 text-sm">{chunk}</span>,
        })}
      </p>

      {/* <RatingStar avgRate={rateAvg} /> */}
      <Rating value={rateAvg} variant="yellow" Icon={<Star strokeWidth={0} size={20} />} />
    </header>
  );
}
