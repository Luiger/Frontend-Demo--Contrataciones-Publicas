import apiClient from "./apiClient";
import { LoginCredentials, LoginResponse } from "@/types/auth";

export const authService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>("/login", credentials);
    return response.data;
  },
};
