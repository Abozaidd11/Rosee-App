import { NextIntlClientProvider } from "next-intl";
import ReactQueryProvider from "./_components/react-query.provider";
import AuthProvider from "./_components/auth-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ReactQueryProvider>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </ReactQueryProvider>
    </AuthProvider>
  );
}
