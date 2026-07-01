export interface ScheduleHeaderProps {
  title: string;
}

export interface TimetableGridProps {
  timeSlots: string[];
  timetableData: any[];
  isEditMode?: boolean;
  onCellChange?: (day: string, periodIdx: number, value: string) => void;
}

export interface TimetableFiltersProps {
  filters: any;
  control: any;
  updateFilter: (key: string, value: string) => void;
  isEditMode?: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  recipients: string;
  sendNotification: string;
}

export interface EventListProps {
  events: Event[];
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
}

export interface EventFormProps {
  mode: "create" | "edit";
  initialData: Event | null;
  onSubmit: (data: any) => void;
}

export interface EventEmptyStateProps {
  onCreate: () => void;
}

export interface CalendarYearViewProps {
  visibleMonths: any[];
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  modifiers: any;
  handlePrev: () => void;
  handleNext: () => void;
}

export interface CalendarViewSelectorProps {
  view: "Year" | "Session" | "Term";
  setView: (view: "Year" | "Session" | "Term") => void;
}

export interface CalendarUpdateFormProps {
  selectedDate: Date | undefined;
}

export interface TermEvent {
  label: string;
  name: string;
  begins: string;
  ends: string;
}

export interface CalendarSessionViewProps {
  mode: "view" | "create" | "edit" | "";
  setMode: (mode: "view" | "create" | "edit" | "") => void;
  hasSession: boolean;
  setHasSession: (has: boolean) => void;
}
