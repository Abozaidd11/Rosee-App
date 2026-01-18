import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

// English Font variants
const sarabun = localFont({
  src: [
    { path: "../../public/fonts/Sarabun-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/Sarabun-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/Sarabun-SemiBold.ttf", weight: "600" },
    { path: "../../public/fonts/Sarabun-Bold.ttf", weight: "700" },
  ],
  variable: "--font-sarabun",
  display: "swap",
});

// Arabic Font variants
const tajawal = localFont({
  src: [
    { path: "../../public/fonts/Tajawal-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/Tajawal-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/Tajawal-Bold.ttf", weight: "700" },
    { path: "../../public/fonts/Tajawal-ExtraBold.ttf", weight: "800" },
  ],
  variable: "--font-tajawal",
  display: "swap",
});

// Label fonts
const inter = localFont({
  src: "../../public/fonts/Inter-VariableFont.ttf",
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
      <body className={`${sarabun.variable} ${tajawal.variable} ${inter.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
