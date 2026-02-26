import { NextIntlClientProvider } from "next-intl";
import ReactQueryProvider from "./_components/react-query.provider";
import AuthProvider from "./_components/auth-provider";
import MergeGuestCartProvider from "./_components/merge-guest-cart.provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ReactQueryProvider>
        <NextIntlClientProvider>
          <MergeGuestCartProvider>{children}</MergeGuestCartProvider>
        </NextIntlClientProvider>
      </ReactQueryProvider>
    </AuthProvider>
  );
}
