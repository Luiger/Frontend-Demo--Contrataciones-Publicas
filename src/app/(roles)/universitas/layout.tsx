import type { Metadata } from "next";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { ROLES } from "@/types/role.types";

export const metadata: Metadata = {
  title: "Universitas | Dashboard",
  description: "Panel de Control - Máxima Autoridad",
};

export default function UniversitasLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout role={ROLES.UNIVERSITAS}>{children}</DashboardLayout>;
}
