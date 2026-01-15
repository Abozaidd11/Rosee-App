import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// English Font variants
const sarabun = localFont({
  src: [
    { path: "./fonts/Sarabun-Regular.ttf", weight: "400" },
    { path: "./fonts/Sarabun-Medium.ttf", weight: "500" },
    { path: "./fonts/Sarabun-SemiBold.ttf", weight: "600" },
    { path: "./fonts/Sarabun-Bold.ttf", weight: "700" },
  ],
  variable: "--font-sarabun",
  display: "swap",
});

// Arabic Font variants
const tajawal = localFont({
  src: [
    { path: "./fonts/Tajawal-Regular.ttf", weight: "400" },
    { path: "./fonts/Tajawal-Medium.ttf", weight: "500" },
    { path: "./fonts/Tajawal-Bold.ttf", weight: "700" },
    { path: "./fonts/Tajawal-ExtraBold.ttf", weight: "800" },
  ],
  variable: "--font-tajawal",
  display: "swap",
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
        className={`${sarabun.variable} ${tajawal.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
