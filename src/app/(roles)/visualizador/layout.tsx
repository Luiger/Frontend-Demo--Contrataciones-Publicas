import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visualizador | Dashboard",
  description: "Panel de Control - Consulta de Información",
};

export default function VisualizadorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-role="visualizador" className="min-h-screen">
      {children}
    </div>
  );
}
