import Providers from "@/components/providers/app";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";
import localFont from "next/font/local";
import { Great_Vibes } from "next/font/google";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";

// Auth layout font
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-greatVibes",
  weight: "400",
});

type LocaleProps = {
  children: React.ReactNode;
  params: { locale: string };
};

// English Font variants
const sarabun = localFont({
  src: [
    { path: "../../../public/fonts/Sarabun-Regular.ttf", weight: "400" },
    { path: "../../../public/fonts/Sarabun-Medium.ttf", weight: "500" },
    { path: "../../../public/fonts/Sarabun-SemiBold.ttf", weight: "600" },
    { path: "../../../public/fonts/Sarabun-Bold.ttf", weight: "700" },
  ],
  variable: "--font-sarabun",
  display: "swap",
});

// Arabic Font variants
const tajawal = localFont({
  src: [
    { path: "../../../public/fonts/Tajawal-Regular.ttf", weight: "400" },
    { path: "../../../public/fonts/Tajawal-Medium.ttf", weight: "500" },
    { path: "../../../public/fonts/Tajawal-Bold.ttf", weight: "700" },
    { path: "../../../public/fonts/Tajawal-ExtraBold.ttf", weight: "800" },
  ],
  variable: "--font-tajawal",
  display: "swap",
});

// Label fonts
const inter = localFont({
  src: "../../../public/fonts/Inter-VariableFont.ttf",
  variable: "--font-inter",
  weight: "300 400 500 600 700 800 900",
});

// edwardianscriptitc
const edwardianscriptitc = localFont({
  src: "../../../public/fonts/edwardianscriptitc.ttf",
  variable: "--font-edwardianscriptitc",
  weight: "400",
});

export async function generateMetadata({ params: { locale } }: Pick<LocaleProps, "params">) {
  // Translations
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("app-title"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }: LocaleProps) {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${sarabun.variable} ${tajawal.variable} ${inter.variable} ${edwardianscriptitc.variable} ${greatVibes.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
