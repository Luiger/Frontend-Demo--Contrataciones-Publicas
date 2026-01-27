import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Página de Inicio del Dashboard
 * Server Component - Renderizado en el servidor (SSR)
 *
 * Esta es la página principal que ve el usuario después de iniciar sesión.
 */
export default function InicioPage() {
  return (
    <>
      <DashboardHeader />

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-screen flex-1 rounded-xl bg-muted/50 p-4 md:p-8">
          <div className="mx-auto max-w-6xl space-y-8">
            {/* Encabezado */}
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Bienvenido al Dashboard</h2>
              <p className="text-muted-foreground">
                Esta es la página principal de tu aplicación. Aquí podrás ver estadísticas y
                gestionar tu contenido.
              </p>
            </div>

            {/* Grid de Cards - Ejemplo de contenido */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Total Usuarios</CardTitle>
                  <CardDescription>Usuarios registrados en el sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">1,234</div>
                  <p className="text-xs text-muted-foreground mt-2">+10% desde el último mes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Documentos</CardTitle>
                  <CardDescription>Documentos almacenados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">567</div>
                  <p className="text-xs text-muted-foreground mt-2">+5% desde el último mes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Actividad</CardTitle>
                  <CardDescription>Acciones realizadas hoy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground mt-2">En las últimas 24 horas</p>
                </CardContent>
              </Card>
            </div>

            {/* Sección de bienvenida */}
            <Card>
              <CardHeader>
                <CardTitle>¿Qué puedes hacer aquí?</CardTitle>
                <CardDescription>Funcionalidades disponibles en tu dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Gestionar usuarios y permisos</li>
                  <li>Ver y editar documentos</li>
                  <li>Personalizar configuración de la aplicación</li>
                  <li>Acceder a reportes y estadísticas</li>
                  <li>Conectar con tu backend cuando esté listo</li>
                </ul>
              </CardContent>
            </Card>

            {/* Nota informativa */}
            <div className="rounded-lg border border-border bg-card p-4 text-card-foreground">
              <h3 className="font-semibold mb-2">📝 Próximos pasos</h3>
              <p className="text-sm text-muted-foreground">
                Este es un maquetado del dashboard. Cuando tu equipo backend esté listo, podrás
                conectar los endpoints para cargar datos reales, implementar autenticación completa,
                y agregar todas las funcionalidades necesarias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
