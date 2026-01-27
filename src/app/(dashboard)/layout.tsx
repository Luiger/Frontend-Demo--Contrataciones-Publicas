"use client";

import { useEffect, useState } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { useSidebarStore } from "@/store/use-sidebar-store";

/**
 * Layout del Dashboard con persistencia en localStorage
 *
 * MIGRADO de cookies a localStorage para:
 * - ✅ Evitar problemas legales (GDPR/CCPA)
 * - ✅ Mejor performance (sin overhead en requests)
 * - ✅ Más simple y mantenible
 *
 * Usa Zustand con persist middleware que guarda en localStorage.
 * El mounted state evita hydration mismatches entre servidor y cliente.
 */
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isCollapsed, setCollapsed } = useSidebarStore();
  const [mounted, setMounted] = useState(false);

  // Asegurar que estamos en el cliente antes de usar estado de localStorage
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Primera renderización: usar default (evitar hydration mismatch)
  if (!mounted) {
    return (
      <div suppressHydrationWarning>
        <SidebarProvider defaultOpen={true}>
          <AppSidebar />
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </div>
    );
  }

  // Después de montar: usar estado de localStorage
  return (
    <div suppressHydrationWarning>
      <SidebarProvider open={!isCollapsed} onOpenChange={(open) => setCollapsed(!open)}>
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </div>
  );
}
