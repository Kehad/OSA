import { DashboardData, StatCardProps } from "./types";

export const RoleStatsData: Record<string, StatCardProps[]> = {
  "super-admin": [
    {
      title: "Total Students",
      value: "3,000",
      gradient: "linear-gradient(135deg, #4B5563 0%, #374151 50%, #1F2937 100%)",
    },
    {
      title: "Total Parents",
      value: "2,400",
      gradient: "linear-gradient(135deg, #6B7280 0%, #4B5563 50%, #374151 100%)",
    },
    {
      title: "Total Staff",
      value: "150",
      gradient: "linear-gradient(135deg, #84CC16 0%, #65A30D 50%, #4D7C0F 100%)",
    },
  ],
  admin: [
    {
      title: "Total Students",
      value: "1,250",
      gradient: "linear-gradient(135deg, #4B5563 0%, #374151 50%, #1F2937 100%)",
    },
    {
      title: "Active Classes",
      value: "24",
      gradient: "linear-gradient(135deg, #6B7280 0%, #4B5563 50%, #374151 100%)",
    },
    {
      title: "Total Teachers",
      value: "45",
      gradient: "linear-gradient(135deg, #84CC16 0%, #65A30D 50%, #4D7C0F 100%)",
    },
  ],
  student: [
    {
      title: "My Attendance",
      value: "96%",
      gradient: "linear-gradient(135deg, #4B5563 0%, #374151 50%, #1F2937 100%)",
    },
    {
      title: "Enrolled Subjects",
      value: "9",
      gradient: "linear-gradient(135deg, #6B7280 0%, #4B5563 50%, #374151 100%)",
    },
    {
      title: "Current Term Avg",
      value: "88%",
      gradient: "linear-gradient(135deg, #84CC16 0%, #65A30D 50%, #4D7C0F 100%)",
    },
  ],
};

export const RoleAttendanceData: Record<string, DashboardData> = {
  "super-admin": {
    title: "School-wide Attendance",
    isDate: true,
    legendItems: [
      { color: "#FEF3C7", label: "25% Absent" },
      { color: "#FCD34D", label: "75% Present" },
    ],
    colors: ["#FCD34D", "#FEF3C7"],
    date: "Today",
    itemData: [
      { title: "No. of students present:", value: "2,250" },
      { title: "No. of students absent:", value: "750" },
    ],
  },
  admin: {
    title: "Class Attendance Rate",
    isDate: true,
    legendItems: [
      { color: "#FEF3C7", label: "15% Absent" },
      { color: "#FCD34D", label: "85% Present" },
    ],
    colors: ["#FCD34D", "#FEF3C7"],
    date: "Today",
    itemData: [
      { title: "No. of students present:", value: "1,062" },
      { title: "No. of students absent:", value: "188" },
    ],
  },
  student: {
    title: "My Attendance Record",
    isDate: true,
    legendItems: [
      { color: "#FEF3C7", label: "4% Missed" },
      { color: "#10B981", label: "96% Attended" },
    ],
    colors: ["#10B981", "#FEF3C7"],
    date: "Term 1",
    itemData: [
      { title: "Total Days Attended:", value: "48 Days" },
      { title: "Total Days Absent:", value: "2 Days" },
    ],
  },
};

export const RoleSummaryData: Record<string, DashboardData> = {
  "super-admin": {
    title: "Fees Summary",
    isDate: false,
    legendItems: [
      { color: "#EF4444", label: "25% Unpaid" },
      { color: "#10B981", label: "75% Paid" },
    ],
    colors: ["#10B981", "#EF4444"],
    terms: ["This term", "Last term", "This year"],
    itemData: [
      { title: "Total expected fee:", value: "₦150,000,000" },
      { title: "Collected fee:", value: "₦112,500,000" },
    ],
  },
  admin: {
    title: "Term Fee Collections",
    isDate: false,
    legendItems: [
      { color: "#EF4444", label: "20% Pending" },
      { color: "#10B981", label: "80% Collected" },
    ],
    colors: ["#10B981", "#EF4444"],
    terms: ["This term", "Last term"],
    itemData: [
      { title: "Target fee collection:", value: "₦62,500,000" },
      { title: "Total collected:", value: "₦50,000,000" },
    ],
  },
  student: {
    title: "Academic Performance",
    isDate: false,
    legendItems: [
      { color: "#3B82F6", label: "89% Target Met" },
      { color: "#10B981", label: "100% Passed" },
    ],
    colors: ["#10B981", "#3B82F6"],
    terms: ["Term 1", "Term 2"],
    itemData: [
      { title: "Total Subjects:", value: "9" },
      { title: "Grade Point Average:", value: "3.8 / 4.0" },
    ],
  },
};
