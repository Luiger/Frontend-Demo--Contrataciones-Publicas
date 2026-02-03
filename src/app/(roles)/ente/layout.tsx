import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ente | Dashboard",
  description: "Panel de Control - Entidad Contratante",
};

export default function EnteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-role="ente" className="min-h-screen">
      {children}
    </div>
  );
}
