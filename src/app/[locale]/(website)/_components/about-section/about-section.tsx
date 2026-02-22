"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  // Translation
  const t = useTranslations("about");

  return (
    <section id="about" className="w-full py-12">
      <div className="container px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side - Images */}
          <div className="relative flex items-center justify-center">
            <div className="flex items-center gap-10 lg:gap-16">
              {/* Large Purple Gift Box */}
              <div
                className="relative h-96 w-72 overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:border-4 before:border-[#A6252A] before:content-['']"
                style={{
                  borderTopLeftRadius: "50px",
                  borderTopRightRadius: "120px",
                  borderBottomRightRadius: "120px",
                  borderBottomLeftRadius: "120px",
                  transform: "rotate(3.009deg)",
                }}
              >
                <Image
                  src="/assets/images/about-gift-1.png"
                  alt="Purple gift box"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 80%", transform: "rotate(-3.009deg) scale(1.05)" }}
                />
              </div>

              {/* Right Column - Two Smaller Boxes */}
              <div className="flex w-48 flex-col gap-4">
                {/* Orange Gift Box - Circular */}
                <div
                  className="relative h-48 w-48 flex-shrink-0 overflow-hidden bg-white"
                  style={{ borderRadius: "150px" }}
                >
                  <Image
                    src="/assets/images/about-gift-2.png"
                    alt="Orange gift box"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Teal Gift Box - Custom Rounded */}
                <div
                  className="relative h-36 w-48 flex-shrink-0 overflow-hidden bg-white"
                  style={{
                    borderTopLeftRadius: "50px",
                    borderTopRightRadius: "100px",
                    borderBottomRightRadius: "100px",
                    borderBottomLeftRadius: "50px",
                  }}
                >
                  <Image
                    src="/assets/images/about-gift-3.png"
                    alt="Teal gift box"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 70%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col gap-4">
            {/* Badge */}
            <div className="inline-flex h-6 w-20 items-center justify-center rounded bg-[#FFE81A] shadow-lg">
              <span className="font-sarabun text-base font-bold uppercase leading-[100%] tracking-[0.25em] text-[#27272A]">
                {t("badge")}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-primary max-w-2xl text-3xl font-bold leading-tight">
              <span className="text-[#741C21]">{t("heading.delivering-the")}</span>
              <span className="text-[#FF668B]">{t("heading.finest")}</span>
              <span className="text-[#741C21]">{t("heading.gift-boxes-for-your")}</span>
              <span className="text-[#FF668B]">{t("heading.special")}</span>
              <span className="text-[#741C21]">{t("heading.moments")}</span>
            </h2>

            {/* Description */}
            <p className="font-primary max-w-2xl text-base font-normal leading-relaxed text-[#71717A]">
              {t("description")}
            </p>

            {/* Discover Button */}
            <button className="group mt-2 flex w-fit items-center gap-2.5 rounded-lg bg-[#A6252A] px-4 py-2.5 font-semibold text-white transition-colors hover:bg-[#8B1F23]">
              {t("button")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Features Grid */}
            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4">
                <Check className="h-6 w-6 flex-shrink-0 text-[#741C21]" strokeWidth={3} />
                <span className="font-primary text-base font-normal leading-[100%] tracking-[0] text-[#27272A]">
                  {t("features.competitive-prices")}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Check className="h-6 w-6 flex-shrink-0 text-[#741C21]" strokeWidth={3} />
                <span className="font-primary text-base font-normal leading-[100%] tracking-[0] text-[#27272A]">
                  {t("features.premium-quality")}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Check className="h-6 w-6 flex-shrink-0 text-[#741C21]" strokeWidth={3} />
                <span className="font-primary text-base font-normal leading-[100%] tracking-[0] text-[#27272A]">
                  {t("features.perfect-occasion")}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Check className="h-6 w-6 flex-shrink-0 text-[#741C21]" strokeWidth={3} />
                <span className="font-primary text-base font-normal leading-[100%] tracking-[0] text-[#27272A]">
                  {t("features.fast-delivery")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
