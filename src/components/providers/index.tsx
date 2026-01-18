import { NextIntlClientProvider } from "next-intl";
import ReactQueryProvider from "./_components/react-query.provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </ReactQueryProvider>
  );
}
