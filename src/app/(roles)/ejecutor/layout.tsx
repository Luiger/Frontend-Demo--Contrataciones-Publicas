import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ejecutor | Dashboard",
  description: "Panel de Control - Ejecutor de Tareas",
};

export default function EjecutorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-role="ejecutor" className="min-h-screen">
      {children}
    </div>
  );
}
