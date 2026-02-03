import type { Metadata } from "next";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { ROLES } from "@/types/role.types";

export const metadata: Metadata = {
  title: "Ejecutor | Dashboard",
  description: "Panel de Control - Ejecutor de Tareas",
};

export default function EjecutorLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role={ROLES.EJECUTOR}>{children}</DashboardLayout>;
}
