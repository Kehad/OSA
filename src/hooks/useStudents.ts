import { useState, useCallback } from "react";
import { Student } from "../types/student";
import studentService from "../services/studentService";

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalPages: 1,
    totalRecords: 0,
  });

  const fetchStudents = useCallback(async (page = 1, limit = 10) => {
    setLoading(true);
    setError(null);
    try {
      const response = await studentService.getStudents(page, limit);
      if (response.success && response.data) {
        setStudents(response.data.users || []);
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
      setError(err.response?.data?.message || err.message || "Failed to fetch students");
    } finally {
      setLoading(false);
    }
  }, []);

  const createStudent = useCallback(async (studentData: Partial<Student>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await studentService.createStudent(studentData);
      if (response.success && response.data) {
        setStudents((prev) => [response.data, ...prev]);
        return response.data;
      }
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || "Failed to create student";
      setError(msg);
      throw new Error(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    students,
    loading,
    error,
    pagination,
    fetchStudents,
    createStudent,
  };
};
export default useStudents;
