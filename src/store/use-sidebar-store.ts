import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

/**
 * Sidebar Store con Zustand
 *
 * Este store maneja el estado del sidebar usando Zustand con middleware:
 * - immer: Para mutaciones inmutables más fáciles
 * - persist: Para guardar el estado en localStorage
 */

interface SidebarState {
  // Estado collapsed del sidebar en desktop
  isCollapsed: boolean;

  // Acciones
  toggle: () => void;
  setCollapsed: (collapsed: boolean) => void;
}

/**
 * Hook de Zustand para el sidebar
 *
 * NOTA SOBRE IMMER:
 * Immer permite escribir código que "muta" el estado de forma directa,
 * pero internamente crea copias inmutables. Esto hace el código más legible.
 *
 * Sin immer:
 * set({ isCollapsed: !state.isCollapsed })
 *
 * Con immer:
 * set((state) => { state.isCollapsed = !state.isCollapsed })
 *
 * Immer detecta los cambios y genera un nuevo objeto inmutable automáticamente.
 */
export const useSidebarStore = create<SidebarState>()(
  persist(
    immer((set) => ({
      isCollapsed: false,

      toggle: () =>
        set((state) => {
          // Con immer, podemos "mutar" directamente
          state.isCollapsed = !state.isCollapsed;
        }),

      setCollapsed: (collapsed) =>
        set((state) => {
          state.isCollapsed = collapsed;
        }),
    })),
    {
      name: "sidebar-storage", // Key en localStorage
      // skipHydration se usa en SSR para evitar errores de hidratación
      // pero shadcn sidebar maneja esto internamente con cookies
    }
  )
);
