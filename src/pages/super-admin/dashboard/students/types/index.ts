export interface Student {
  id: string;
  fullName: string;
  middleName: string;
  firstName: string;
  surname: string;
  emailAddress: string;
  dateOfBirth: string;
  class: string;
  subject: string;
  feesStatus: string;
  boardingStatus: string;
  sportHouse: string;
  genotype: string;
  height: string;
  weight: string;
  bloodGroup: string;
  fatherName: string;
  motherName: string;
  nokPhoneNumber: string;
  parentId: string;
  contact: string;
}

export interface StepProps {
  formData: Record<string, any>;
  onChange: (data: Record<string, any>) => void;
  onNext?: () => void;
  onBack?: () => void;
  onSave?: () => void;
  isEdit?: boolean;
  entityType?: string;
  config?: any;
}
