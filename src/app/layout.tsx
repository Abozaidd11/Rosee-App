import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// English Font variants
const sarabunRegular = localFont({
  src: "./fonts/Sarabun-Regular.ttf",
  variable: "--font-sarabun-regular",
  weight: "400",
});
const sarabunMedium = localFont({
  src: "./fonts/Sarabun-Medium.ttf",
  variable: "--font-sarabun-medium",
  weight: "500",
});
const sarabunSemiBold = localFont({
  src: "./fonts/Sarabun-SemiBold.ttf",
  variable: "--font-sarabun-semi-bold",
  weight: "600",
});
const sarabunBold = localFont({
  src: "./fonts/Sarabun-Bold.ttf",
  variable: "--font-sarabun-bold",
  weight: "700",
});

// Arabic Font variants
const tajawalRegular = localFont({
  src: "./fonts/Tajawal-Regular.ttf",
  variable: "--font-tajawal-regular",
  weight: "400",
});
const tajawalMedium = localFont({
  src: "./fonts/Tajawal-Medium.ttf",
  variable: "--font-tajawal-medium",
  weight: "500",
});
const tajawalBold = localFont({
  src: "./fonts/Tajawal-Bold.ttf",
  variable: "--font-tajawal-bold",
  weight: "700",
});
const tajawalExtraBold = localFont({
  src: "./fonts/Tajawal-ExtraBold.ttf",
  variable: "--font-tajawal-extra-bold",
  weight: "800",
});

// Label fonts
const inter = localFont({
  src: "./fonts/Inter-VariableFont.ttf",
  variable: "--font-inter",
  weight: "300 400 500 600 700 800 900",
});

// Metadata
export const metadata: Metadata = {
  title: "Rose App",
  description: "Ecommerce Rose App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sarabunRegular.variable} ${sarabunMedium.variable} ${sarabunSemiBold.variable} ${sarabunBold.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
