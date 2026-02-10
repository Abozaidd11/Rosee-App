"use client";

import { NextIntlClientProvider } from "next-intl";
import ReactQueryProvider from "./_components/react-query.provider";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, unknown>;
}

export default function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <SessionProvider>
      <ReactQueryProvider>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </ReactQueryProvider>
    </SessionProvider>
  );
}
