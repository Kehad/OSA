export interface Student {
  id: string;
  _id?: string;
  fullName: string;
  middleName: string;
  firstName: string;
  surname: string;
  emailAddress: string;
  dateOfBirth: string;
  class: string;
  subject?: string;
  feesStatus: "Paid" | "Unpaid";
  boardingStatus: string;
  sportHouse?: string;
  genotype?: string;
  height?: string;
  weight?: string;
  bloodGroup?: string;
  fatherName?: string;
  motherName?: string;
  nokPhoneNumber?: string;
  parentId?: string;
  contact: string;
  picture?: string;
}
