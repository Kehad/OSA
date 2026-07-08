export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface PaginatedResponse<T> {
  success: boolean;
  message?: string;
  data: {
    users?: T[];
    results?: T[];
    payments?: T[];
    attendance?: T[];
    pagination?: {
      page: number;
      limit: number;
      totalPages: number;
      totalUsers?: number;
      totalResults?: number;
      totalPayments?: number;
      totalRecords?: number;
    };
  };
}

export interface ApiError {
  success: boolean;
  message: string;
  errors?: Array<{
    msg: string;
    path?: string;
    location?: string;
  }>;
}
