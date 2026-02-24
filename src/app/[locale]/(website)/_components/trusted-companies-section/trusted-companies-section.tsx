"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function TrustedCompaniesSection() {
  const t = useTranslations("trusted-companies");

  const companies = [
    { name: "Coconut", logo: "/assets/images/brands/coconut.png" },
    { name: "Ginyard", logo: "/assets/images/brands/ginyard.png" },
    { name: "Ingoude Company", logo: "/assets/images/brands/ingoude-company.png" },
    { name: "Velvet", logo: "/assets/images/brands/velvet.png" },
    { name: "Ingoude", logo: "/assets/images/brands/ingoude.png" },
    { name: "Habur Furniture", logo: "/assets/images/brands/habur.png" },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1280px] px-4">
        {/* Background Container */}
        <div className="flex flex-col items-center justify-center gap-6 rounded-3xl bg-[#FFE0E7] px-8 py-8 h-[207px]">
          {/* Heading */}
          <h2 className="font-primary text-center text-3xl font-bold text-[#741C21]">
            {t("heading.trusted-by")} <span className="text-[#FF668B]">{t("heading.count")}</span>{" "}
            {t("heading.companies")}
          </h2>

          {/* Logos Grid */}
          <div className="flex w-full max-w-[1232px] flex-wrap items-center justify-center gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="relative h-[51px] w-[146px] opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              >
                <Image src={company.logo} alt={company.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
