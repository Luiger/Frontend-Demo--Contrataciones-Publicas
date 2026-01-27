import { redirect } from "next/navigation";

/**
 * Página raíz del dashboard
 * Redirige automáticamente a /inicio
 */
export default function DashboardPage() {
  redirect("/inicio");
}
