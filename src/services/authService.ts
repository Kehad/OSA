import { apiClient } from "./apiClient";
import { LoginCredentials, TokenResponse, User } from "../types/auth";
import { ApiResponse } from "../types/api";

const MOCK_ACCOUNTS: Record<string, { role: any; password: string; firstName: string; lastName: string }> = {
  "superadmin@osa.com": { role: "super-admin", password: "password123", firstName: "Oluwatosin", lastName: "Owner" },
  "admin@osa.com": { role: "admin", password: "password123", firstName: "Emeka", lastName: "Obi" },
  "student@osa.com": { role: "student", password: "password123", firstName: "Nachi", lastName: "John" },
};

export const authService = {
  login: async (credentials: LoginCredentials): Promise<TokenResponse> => {
    const email = credentials.email.toLowerCase();
    const password = credentials.password || "";

    if (MOCK_ACCOUNTS[email] && MOCK_ACCOUNTS[email].password === password) {
      const mockInfo = MOCK_ACCOUNTS[email];
      const mockUser: User = {
        id: `mock-${mockInfo.role}-id`,
        _id: `mock-${mockInfo.role}-id`,
        email: email,
        role: mockInfo.role,
        firstName: mockInfo.firstName,
        lastName: mockInfo.lastName,
        fullName: `${mockInfo.firstName} ${mockInfo.lastName}`,
        status: "active",
      };

      return {
        success: true,
        accessToken: `mock-jwt-access-token-for-${mockInfo.role}`,
        refreshToken: `mock-jwt-refresh-token-for-${mockInfo.role}`,
        user: mockUser,
      };
    }

    const response = await apiClient.post<TokenResponse>("/auth/login", credentials);
    return response.data;
  },

  getMe: async (): Promise<ApiResponse<User>> => {
    const token = localStorage.getItem("osa_access_token");
    if (token && token.startsWith("mock-jwt-access-token-for-")) {
      const userStr = localStorage.getItem("osa_user");
      if (userStr) {
        return {
          success: true,
          data: JSON.parse(userStr),
        };
      }
    }

    const response = await apiClient.get<ApiResponse<User>>("/auth/me");
    return response.data;
  },

  logout: async (): Promise<void> => {
    localStorage.removeItem("osa_access_token");
    localStorage.removeItem("osa_refresh_token");
    localStorage.removeItem("osa_user");
  }
};
export default authService;
