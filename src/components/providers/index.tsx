"use client";

import { NextIntlClientProvider } from "next-intl";
import ReactQueryProvider from "./_components/react-query.provider";
import { SessionProvider } from "next-auth/react";
import { useParams } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <SessionProvider>
      <ReactQueryProvider>
        <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
      </ReactQueryProvider>
    </SessionProvider>
  );
}
