export type UserRole = "super-admin" | "admin" | "teacher" | "student" | "parent";

export interface User {
  id: string;
  _id?: string;
  email: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  middleName?: string;
  fullName: string;
  status: "active" | "deactivated" | "locked";
  picture?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TokenResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password?: string;
}
