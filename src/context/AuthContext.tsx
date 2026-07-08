import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User, LoginCredentials } from "../types/auth";
import authService from "../services/authService";
import { apiClient } from "../services/apiClient";

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initialize Auth state from localStorage
  const initializeAuth = async () => {
    const storedToken = localStorage.getItem("osa_access_token");
    const storedUserStr = localStorage.getItem("osa_user");

    if (storedToken) {
      setToken(storedToken);
      if (storedUserStr) {
        try {
          setUser(JSON.parse(storedUserStr));
        } catch {
          // JSON parsing failed, fetch from API
        }
      }

      try {
        // Fetch fresh profile from backend
        const response = await authService.getMe();
        if (response.success && response.data) {
          setUser(response.data);
          localStorage.setItem("osa_user", JSON.stringify(response.data));
        }
      } catch (error) {
        console.error("Failed to restore profile:", error);
        // Clear state if fetching user profile fails and tokens are invalid
        const stillHasToken = localStorage.getItem("osa_access_token");
        if (!stillHasToken) {
          logout();
        }
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    initializeAuth();

    // Listen for global logout events triggered by interceptor on token expiration
    const handleGlobalLogout = () => {
      setUser(null);
      setToken(null);
      setIsLoading(false);
    };

    window.addEventListener("osa-logout", handleGlobalLogout);
    return () => {
      window.removeEventListener("osa-logout", handleGlobalLogout);
    };
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const response = await authService.login(credentials);
      
      localStorage.setItem("osa_access_token", response.accessToken);
      localStorage.setItem("osa_refresh_token", response.refreshToken);
      localStorage.setItem("osa_user", JSON.stringify(response.user));
      
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${response.accessToken}`;
      
      setToken(response.accessToken);
      setUser(response.user);
    } catch (error) {
      logout();
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("osa_access_token");
    localStorage.removeItem("osa_refresh_token");
    localStorage.removeItem("osa_user");
    delete apiClient.defaults.headers.common["Authorization"];
    
    setToken(null);
    setUser(null);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isAuthenticated: !!token && !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
