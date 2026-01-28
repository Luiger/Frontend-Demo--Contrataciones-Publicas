import axios from "axios";
import { getAccessToken } from "@/utils/authStorage";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://sistema-backend-bpux.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token a las peticiones
apiClient.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
