import AppSidebar from "@/components/AppSidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-50 text-zinc-900">
      <AppSidebar />

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}