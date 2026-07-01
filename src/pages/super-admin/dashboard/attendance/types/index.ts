export interface SchoolAttendanceListProps {
  schoolName: string;
  onBack: () => void;
  onClassClick: (id: string) => void;
}

export interface ClassAttendanceDetailProps {
  className: string;
  onBack: () => void;
}

export interface AttendanceStatsCardProps {
  title: string;
  date: string;
  present: number;
  absent: number;
  total: number;
  color: string;
  secondaryColor: string;
  onViewClick: () => void;
}

export interface AttendanceDashboardProps {
  stats: any[];
  weeklyData: any[];
  onViewSchool: (id: string) => void;
}
