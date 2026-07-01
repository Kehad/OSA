export interface StatCardProps {
  title: string;
  value: string | number;
  gradient: string;
}

export interface AttendanceChartData {
  name: string;
  value: number;
}

export interface LegendItemData {
  color: string;
  label: string;
}

export interface StatItemData {
  title: string;
  value: string | number;
}

export interface AttendanceCardProps {
  isDate?: boolean;
  date?: string;
  attendanceData?: AttendanceChartData[];
  legendItems?: LegendItemData[];
  colors?: string[];
  terms?: string[];
  onTermChange?: (term: string) => void;
  present?: number | string;
  absent?: number | string;
  itemData: StatItemData[];
  title?: string;
}

export interface StudentFeeData {
  name: string;
  class: string;
  contact: string;
  status: "Paid" | "Unpaid" | string;
}

export interface DashboardData {
  title: string;
  isDate: boolean;
  legendItems: LegendItemData[];
  colors: string[];
  date?: string;
  terms?: string[];
  itemData: StatItemData[];
  attendanceData?: AttendanceChartData[];
  present?: number | string;
  absent?: number | string;
}
