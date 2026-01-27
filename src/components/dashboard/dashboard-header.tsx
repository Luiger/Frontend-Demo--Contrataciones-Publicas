import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

/**
 * Header del Dashboard
 * Server Component - No requiere interactividad
 */
export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-6" />

      <div className="flex-1">
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      {/* Aquí puedes agregar más elementos del header como: */}
      {/* - Búsqueda global */}
      {/* - Notificaciones */}
      {/* - Cambio de idioma */}
      {/* - Breadcrumbs */}
    </header>
  );
}
