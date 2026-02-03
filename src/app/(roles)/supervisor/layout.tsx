import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supervisor | Dashboard",
  description: "Panel de Control - Supervisor de Procesos",
};

export default function SupervisorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-role="supervisor" className="min-h-screen">
      {children}
    </div>
  );
}
