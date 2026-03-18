type LocaleProps = {
  children: React.ReactNode;
};

export default function LocaleLayout({ children }: LocaleProps) {
  return (
    <div className="max-w-screen overflow-x-hidden">
      {/* Children */}
      {children}
    </div>
  );
}
