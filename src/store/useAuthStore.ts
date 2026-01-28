import { create } from "zustand";
import axios from "axios";
import { AuthState, LoginCredentials } from "@/types/auth";
import { authService } from "@/services/authService";
import { getAccessToken, setAccessToken, clearAuthStorage } from "@/utils/authStorage";

export const useAuthStore = create<AuthState>((set) => ({
  user: null, // No persistimos el usuario en localstorage, inicia nulo
  token: getAccessToken(),
  isAuthenticated: !!getAccessToken(),
  isLoading: false,
  error: null,

  login: async (credentials: LoginCredentials) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.login(credentials);

      // Guardar en localStorage solo el token
      setAccessToken(response.token);

      // Actualizar estado
      set({
        user: response.user,
        token: response.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
      return true;
    } catch (error: unknown) {
      let errorMessage = "Error al iniciar sesión. Inténtalo de nuevo.";
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401) {
          errorMessage = "Usuario o contraseña son inválidos";
        } else {
          errorMessage = error.response.data.message || errorMessage;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      set({
        isLoading: false,
        error: errorMessage,
        isAuthenticated: false,
      });
      return false;
    }
  },

  logout: () => {
    clearAuthStorage();
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      error: null,
    });
  },
}));
