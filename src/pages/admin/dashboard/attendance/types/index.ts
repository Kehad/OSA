export interface MockStudent {
  id: string;
  admissionNo: string;
  fullName: string;
  present: boolean;
}

export interface FilterDropdownProps {
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}
