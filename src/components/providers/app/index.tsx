import { NextIntlClientProvider } from "next-intl";
import ReactQueryProvider from "./components/react-query.provider";
import NextAuthProvider from "./components/next-auth.provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthProvider>
      <ReactQueryProvider>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </ReactQueryProvider>
    </NextAuthProvider>
  );
}
