"use client";

import { NextIntlClientProvider } from "next-intl";
import ReactQueryProvider from "./_components/react-query.provider";
import AuthProvider from "./_components/auth-provider";

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, unknown>;
}

export default function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <AuthProvider>
      <ReactQueryProvider>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </ReactQueryProvider>
    </AuthProvider>
  );
}
