export interface ScheduleHeaderProps {
  title: string;
}

export interface TimetableRowData {
  day: string;
  periods: string[];
}

export interface AcademicEventItem {
  date: Date;
  label: string;
  title: string;
  type: "highlighted" | "outlined" | string;
}

export interface AcademicEventGroup {
  month: string;
  year: number;
  events: AcademicEventItem[];
}

export interface EventItem {
  id: number | string;
  title: string;
  description: string;
  date: string;
  time: string;
}

export interface TimetableFilters {
  session: string;
  term: string;
  format: string;
  class: string;
}
