import type { Metadata } from "next";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { ROLES } from "@/types/role.types";

export const metadata: Metadata = {
  title: "Ente | Dashboard",
  description: "Panel de Control - Entidad Contratante",
};

export default function EnteLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role={ROLES.ENTE}>{children}</DashboardLayout>;
}
