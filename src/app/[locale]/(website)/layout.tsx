import LanguageSwitcher from "@/components/ui/language-switcher";

type LocaleProps = {
  children: React.ReactNode;
};

export default function LocaleLayout({ children }: LocaleProps) {
  return (
    <div className="flex flex-col items-center gap-2 pt-5">
      <header>
        <LanguageSwitcher />
      </header>

      {children}

      <footer></footer>
    </div>
  );
}
