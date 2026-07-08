import { apiClient } from "./apiClient";
import { Student } from "../types/student";
import { ApiResponse, PaginatedResponse } from "../types/api";

export const studentService = {
  createStudent: async (studentData: Partial<Student>): Promise<ApiResponse<Student>> => {
    const response = await apiClient.post<ApiResponse<Student>>("/users/students", studentData);
    return response.data;
  },

  getStudents: async (page = 1, limit = 10): Promise<PaginatedResponse<Student>> => {
    const response = await apiClient.get<PaginatedResponse<Student>>(`/users/role/student?page=${page}&limit=${limit}`);
    return response.data;
  },

  getStudentById: async (id: string): Promise<ApiResponse<Student>> => {
    const response = await apiClient.get<ApiResponse<Student>>(`/users/${id}`);
    return response.data;
  },

  linkStudentToParent: async (studentId: string, parentId: string): Promise<ApiResponse<any>> => {
    const response = await apiClient.post<ApiResponse<any>>("/users/link", { studentId, parentId });
    return response.data;
  },

  getStudentAttendance: async (id: string): Promise<ApiResponse<any>> => {
    const response = await apiClient.get<ApiResponse<any>>(`/attendance/student/${id}`);
    return response.data;
  },

  getStudentResults: async (id: string): Promise<ApiResponse<any>> => {
    const response = await apiClient.get<ApiResponse<any>>(`/results/student/${id}`);
    return response.data;
  }
};
export default studentService;
