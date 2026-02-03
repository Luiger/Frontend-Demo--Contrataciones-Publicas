import type { Metadata } from "next";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { ROLES } from "@/types/role.types";

export const metadata: Metadata = {
  title: "Visualizador | Dashboard",
  description: "Panel de Control - Consulta de Información",
};

export default function VisualizadorLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role={ROLES.VISUALIZADOR}>{children}</DashboardLayout>;
}
