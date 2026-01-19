import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";

type LocaleProps = {
  children: React.ReactNode;
};

export default function LocaleLayout({ children }: LocaleProps) {
  return (
    <div className="flex flex-col items-center gap-2 pt-5">
      <Header />
      {/* <LanguageSwitcher /> */}

      {children}

      <Footer />
    </div>
  );
}
