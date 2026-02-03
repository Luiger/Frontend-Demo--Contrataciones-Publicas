import type { Metadata } from "next";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { ROLES } from "@/types/role.types";

export const metadata: Metadata = {
  title: "Supervisor | Dashboard",
  description: "Panel de Control - Supervisor de Procesos",
};

export default function SupervisorLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role={ROLES.SUPERVISOR}>{children}</DashboardLayout>;
}
