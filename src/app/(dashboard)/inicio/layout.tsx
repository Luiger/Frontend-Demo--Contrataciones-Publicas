import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio - Dashboard",
  description: "Página de inicio del dashboard",
};

export default function InicioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
