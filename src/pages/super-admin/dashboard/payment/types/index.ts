export interface PaymentHeaderProps {
  title: string;
  showAddButton?: boolean;
  onAddClick?: () => void;
}

export interface BillingItem {
  id: string;
  class: string;
  fees: string;
  lastUpdated: string;
}

export interface BillingTableProps {
  data: BillingItem[];
}

export interface AddBillFormProps {
  onCancel: () => void;
  onSubmit: (data: any) => void;
}
