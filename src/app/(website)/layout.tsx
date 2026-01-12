import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Header />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer />
    </>
  );
}