export interface Staff {
  id: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  dateOfBirth: string;
  houseAddress: string;
  role: string;
  designation: string;
  class: string;
  subject: string;
  nokFullName: string;
  nokPhoneNumber: string;
  nokEmailAddress: string;
  nokHouseAddress: string;
  profilePicture?: string;
}

export interface WorkInformationFormProps {
  formData: Partial<Staff>;
  onChange: (field: keyof Staff, value: string) => void;
}

export interface ViewStaffProfileProps {
  staff: Staff;
  isEdit?: boolean;
  formData?: Partial<Staff>;
  onChange?: (field: keyof Staff, value: string) => void;
  onSave?: () => void;
  onBack: () => void;
  onEdit: () => void;
}

export interface StaffTableProps {
  staff: Staff[];
  startIndex: number;
  onView: (staff: Staff) => void;
  onEdit: (staff: Staff) => void;
  onDelete: (id: string) => void;
}

export interface StaffListViewProps {
  staffList: Staff[];
  currentPage: number;
  itemsPerPage: number;
  onAddStaff: () => void;
  onView: (staff: Staff) => void;
  onEdit: (staff: Staff) => void;
  onDelete: (id: string) => void;
  onPageChange: (page: number) => void;
}

export interface StaffFormProps {
  currentStep: number;
  formData: Partial<Staff>;
  onSave: () => void;
  onBack: () => void;
  onNext: () => void;
  onChange: (field: keyof Staff, value: string) => void;
}

export interface PersonalInformationFormProps {
  formData: Partial<Staff>;
  isEdit: boolean;
  onChange: (field: keyof Staff, value: string) => void;
}

export interface NextOfKinFormProps {
  formData: Partial<Staff>;
  onChange: (field: keyof Staff, value: string) => void;
}

export interface EmptyStateProps {
  onAddClick: () => void;
}

export interface CompleteFormProps {
  formData: Partial<Staff>;
  isEdit: boolean;
  onChange: (field: keyof Staff, value: string) => void;
}
