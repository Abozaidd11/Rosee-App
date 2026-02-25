import DashboardSidebar from "./_components/dashboard-sidebar";
import DashboardBreadcrumb from "./_components/dashboard-breadcrumb";

type LayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="gap-4 md:gap-0 grid grid-cols-10 bg-zinc-50">
      {/* Side bar */}
      <DashboardSidebar />

      <main className="flex flex-col gap-6 col-span-10 md:col-span-8 mx-auto container">
        {/* Header */}
        <div className="hidden md:block border-black/10 border-b">
          <DashboardBreadcrumb />
        </div>

        {/* Content */}
        {children}
      </main>
    </div>
  );
}
