import { useState, useCallback } from "react";
import { User } from "../types/auth";
import staffService from "../services/staffService";

export const useStaff = () => {
  const [staff, setStaff] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalPages: 1,
    totalRecords: 0,
  });

  const fetchStaff = useCallback(async (role: "teacher" | "admin", page = 1, limit = 10) => {
    setLoading(true);
    setError(null);
    try {
      const response = await staffService.getStaffByRole(role, page, limit);
      if (response.success && response.data) {
        setStaff(response.data.users || []);
        if (response.data.pagination) {
          setPagination({
            page: response.data.pagination.page,
            limit: response.data.pagination.limit,
            totalPages: response.data.pagination.totalPages,
            totalRecords: response.data.pagination.totalUsers || 0,
          });
        }
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Failed to fetch staff");
    } finally {
      setLoading(false);
    }
  }, []);

  const createTeacher = useCallback(async (teacherData: Partial<User>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await staffService.createTeacher(teacherData);
      if (response.success && response.data) {
        setStaff((prev) => [response.data, ...prev]);
        return response.data;
      }
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || "Failed to create teacher";
      setError(msg);
      throw new Error(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  const createAdmin = useCallback(async (adminData: Partial<User>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await staffService.createAdmin(adminData);
      if (response.success && response.data) {
        setStaff((prev) => [response.data, ...prev]);
        return response.data;
      }
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || "Failed to create admin";
      setError(msg);
      throw new Error(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateStatus = useCallback(async (id: string, status: "active" | "deactivated" | "locked") => {
    setLoading(true);
    setError(null);
    try {
      const response = await staffService.updateUserStatus(id, status);
      if (response.success && response.data) {
        setStaff((prev) => prev.map((item) => (item.id === id ? response.data : item)));
        return response.data;
      }
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || "Failed to update status";
      setError(msg);
      throw new Error(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    staff,
    loading,
    error,
    pagination,
    fetchStaff,
    createTeacher,
    createAdmin,
    updateStatus,
  };
};
export default useStaff;
