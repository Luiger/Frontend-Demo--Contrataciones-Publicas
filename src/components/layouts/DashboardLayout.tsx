import { getCurrentUser } from "@/lib/auth/auth";
import { Header } from "@/components/shared/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import type { UserRole } from "@/types/role.types";

interface DashboardLayoutProps {
  role: UserRole;
  children: React.ReactNode;
}

export async function DashboardLayout({ role, children }: DashboardLayoutProps) {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen" data-role={role}>
      <Header
        userName={user.name}
        userEmail={user.email}
        userRole={user.role}
        notificationCount={3} // TODO: Obtener del backend
      />

      <Sidebar role={role} />

      <main className="ml-64 min-h-[calc(100vh-4rem)] bg-background pt-16">{children}</main>
    </div>
  );
}
