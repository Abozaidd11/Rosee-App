import { SectionHead, SectionTitle } from "@/components/ui/section-header";
import { useTranslations } from "next-intl";

export default function TestimonialHeader() {
  // Translation
  const t = useTranslations("testimonials");

  return (
    <header className="flex flex-col items-center gap-2">
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionHead>{t("description")}</SectionHead>
    </header>
  );
}
