import { apiClient } from "./apiClient";
import { LoginCredentials, TokenResponse, User } from "../types/auth";
import { ApiResponse } from "../types/api";

export const authService = {
  login: async (credentials: LoginCredentials): Promise<TokenResponse> => {
    const response = await apiClient.post<TokenResponse>("/auth/login", credentials);
    return response.data;
  },

  getMe: async (): Promise<ApiResponse<User>> => {
    const response = await apiClient.get<ApiResponse<User>>("/auth/me");
    return response.data;
  },

  logout: async (): Promise<void> => {
    // Client-side cleanup is handled in apiClient or AuthContext, 
    // but if the backend had a logout endpoint, it would be called here.
    localStorage.removeItem("osa_access_token");
    localStorage.removeItem("osa_refresh_token");
    localStorage.removeItem("osa_user");
  }
};
export default authService;
