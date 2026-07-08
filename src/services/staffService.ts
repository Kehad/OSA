import { apiClient } from "./apiClient";
import { User } from "../types/auth";
import { ApiResponse, PaginatedResponse } from "../types/api";

export const staffService = {
  createTeacher: async (teacherData: Partial<User>): Promise<ApiResponse<User>> => {
    const response = await apiClient.post<ApiResponse<User>>("/users/teachers", teacherData);
    return response.data;
  },

  createAdmin: async (adminData: Partial<User>): Promise<ApiResponse<User>> => {
    const response = await apiClient.post<ApiResponse<User>>("/users/admins", adminData);
    return response.data;
  },

  getStaffByRole: async (role: "teacher" | "admin", page = 1, limit = 10): Promise<PaginatedResponse<User>> => {
    const response = await apiClient.get<PaginatedResponse<User>>(`/users/role/${role}?page=${page}&limit=${limit}`);
    return response.data;
  },

  updateUserStatus: async (id: string, status: "active" | "deactivated" | "locked"): Promise<ApiResponse<User>> => {
    const response = await apiClient.patch<ApiResponse<User>>(`/users/${id}/status`, { status });
    return response.data;
  }
};
export default staffService;
