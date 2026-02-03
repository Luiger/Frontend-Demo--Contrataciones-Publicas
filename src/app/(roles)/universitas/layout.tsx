import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universitas | Dashboard",
  description: "Panel de Control - Máxima Autoridad",
};

export default function UniversitasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-role="universitas" className="min-h-screen">
      {children}
    </div>
  );
}
