// Main App Component
import { useState } from "react";
import StaffForm from "./StaffForm";
import { ViewStaffProfile } from "./ViewStaffProfile";
import StaffListView from "./StaffListForm";
import { Staff } from "../types";

const StaffManagement = () => {
  const [staffList, setStaffList] = useState<Staff[]>([
    {
      id: "OSA-STAFF-0001",
      fullName: "Oluwafemi John",
      phoneNumber: "08123456789",
      emailAddress: "oluwafemijohn@gmail.com",
      dateOfBirth: "6th May, 1970",
      houseAddress: "15 Lobiside Street, Texas, Akure",
      role: "Administrative staff",
      designation: "Administrative officer",
      class: "N/A",
      subject: "N/A",
      nokFullName: "Enter NOK's full name",
      nokPhoneNumber: "Enter NOK's phone number",
      nokEmailAddress: "Enter email address",
      nokHouseAddress: "15 Lobiside Street, Texas, Akure",
    },
    {
      id: "OSA-STAFF-0001",
      fullName: "Oluwafemi John",
      phoneNumber: "08123456789",
      emailAddress: "oluwafemijohn@gmail.com",
      dateOfBirth: "6th May, 1970",
      houseAddress: "15 Lobiside Street, Texas, Akure",
      role: "Administrative staff",
      designation: "Administrative officer",
      class: "N/A",
      subject: "N/A",
      nokFullName: "Enter NOK's full name",
      nokPhoneNumber: "Enter NOK's phone number",
      nokEmailAddress: "Enter email address",
      nokHouseAddress: "15 Lobiside Street, Texas, Akure",
    },
    {
      id: "OSA-STAFF-0001",
      fullName: "Oluwafemi John",
      phoneNumber: "08123456789",
      emailAddress: "oluwafemijohn@gmail.com",
      dateOfBirth: "6th May, 1970",
      houseAddress: "15 Lobiside Street, Texas, Akure",
      role: "Administrative staff",
      designation: "Administrative officer",
      class: "N/A",
      subject: "N/A",
      nokFullName: "Enter NOK's full name",
      nokPhoneNumber: "Enter NOK's phone number",
      nokEmailAddress: "Enter email address",
      nokHouseAddress: "15 Lobiside Street, Texas, Akure",
    },
    {
      id: "OSA-STAFF-0001",
      fullName: "Oluwafemi John",
      phoneNumber: "08123456789",
      emailAddress: "oluwafemijohn@gmail.com",
      dateOfBirth: "6th May, 1970",
      houseAddress: "15 Lobiside Street, Texas, Akure",
      role: "Administrative staff",
      designation: "Administrative officer",
      class: "N/A",
      subject: "N/A",
      nokFullName: "Enter NOK's full name",
      nokPhoneNumber: "Enter NOK's phone number",
      nokEmailAddress: "Enter email address",
      nokHouseAddress: "15 Lobiside Street, Texas, Akure",
    },
    {
      id: "OSA-STAFF-0001",
      fullName: "Oluwafemi John",
      phoneNumber: "08123456789",
      emailAddress: "oluwafemijohn@gmail.com",
      dateOfBirth: "6th May, 1970",
      houseAddress: "15 Lobiside Street, Texas, Akure",
      role: "Administrative staff",
      designation: "Administrative officer",
      class: "N/A",
      subject: "N/A",
      nokFullName: "Enter NOK's full name",
      nokPhoneNumber: "Enter NOK's phone number",
      nokEmailAddress: "Enter email address",
      nokHouseAddress: "15 Lobiside Street, Texas, Akure",
    },
    {
      id: "OSA-STAFF-0001",
      fullName: "Oluwafemi John",
      phoneNumber: "08123456789",
      emailAddress: "oluwafemijohn@gmail.com",
      dateOfBirth: "6th May, 1970",
      houseAddress: "15 Lobiside Street, Texas, Akure",
      role: "Administrative staff",
      designation: "Administrative officer",
      class: "N/A",
      subject: "N/A",
      nokFullName: "Enter NOK's full name",
      nokPhoneNumber: "Enter NOK's phone number",
      nokEmailAddress: "Enter email address",
      nokHouseAddress: "15 Lobiside Street, Texas, Akure",
    },
    {
      id: "OSA-STAFF-0001",
      fullName: "Oluwafemi John",
      phoneNumber: "08123456789",
      emailAddress: "oluwafemijohn@gmail.com",
      dateOfBirth: "6th May, 1970",
      houseAddress: "15 Lobiside Street, Texas, Akure",
      role: "Administrative staff",
      designation: "Administrative officer",
      class: "N/A",
      subject: "N/A",
      nokFullName: "Enter NOK's full name",
      nokPhoneNumber: "Enter NOK's phone number",
      nokEmailAddress: "Enter email address",
      nokHouseAddress: "15 Lobiside Street, Texas, Akure",
    },
    {
      id: "OSA-STAFF-0001",
      fullName: "Oluwafemi John",
      phoneNumber: "08123456789",
      emailAddress: "oluwafemijohn@gmail.com",
      dateOfBirth: "6th May, 1970",
      houseAddress: "15 Lobiside Street, Texas, Akure",
      role: "Administrative staff",
      designation: "Administrative officer",
      class: "N/A",
      subject: "N/A",
      nokFullName: "Enter NOK's full name",
      nokPhoneNumber: "Enter NOK's phone number",
      nokEmailAddress: "Enter email address",
      nokHouseAddress: "15 Lobiside Street, Texas, Akure",
    },
    {
      id: "OSA-STAFF-0001",
      fullName: "Oluwafemi John",
      phoneNumber: "08123456789",
      emailAddress: "oluwafemijohn@gmail.com",
      dateOfBirth: "6th May, 1970",
      houseAddress: "15 Lobiside Street, Texas, Akure",
      role: "Administrative staff",
      designation: "Administrative officer",
      class: "N/A",
      subject: "N/A",
      nokFullName: "Enter NOK's full name",
      nokPhoneNumber: "Enter NOK's phone number",
      nokEmailAddress: "Enter email address",
      nokHouseAddress: "15 Lobiside Street, Texas, Akure",
    },
    {
      id: "OSA-STAFF-0001",
      fullName: "Oluwafemi John",
      phoneNumber: "08123456789",
      emailAddress: "oluwafemijohn@gmail.com",
      dateOfBirth: "6th May, 1970",
      houseAddress: "15 Lobiside Street, Texas, Akure",
      role: "Administrative staff",
      designation: "Administrative officer",
      class: "N/A",
      subject: "N/A",
      nokFullName: "Enter NOK's full name",
      nokPhoneNumber: "Enter NOK's phone number",
      nokEmailAddress: "Enter email address",
      nokHouseAddress: "15 Lobiside Street, Texas, Akure",
    },
    {
      id: "OSA-STAFF-0001",
      fullName: "Oluwafemi John",
      phoneNumber: "08123456789",
      emailAddress: "oluwafemijohn@gmail.com",
      dateOfBirth: "6th May, 1970",
      houseAddress: "15 Lobiside Street, Texas, Akure",
      role: "Administrative staff",
      designation: "Administrative officer",
      class: "N/A",
      subject: "N/A",
      nokFullName: "Enter NOK's full name",
      nokPhoneNumber: "Enter NOK's phone number",
      nokEmailAddress: "Enter email address",
      nokHouseAddress: "15 Lobiside Street, Texas, Akure",
    },
    {
      id: "OSA-STAFF-0001",
      fullName: "Oluwafemi John",
      phoneNumber: "08123456789",
      emailAddress: "oluwafemijohn@gmail.com",
      dateOfBirth: "6th May, 1970",
      houseAddress: "15 Lobiside Street, Texas, Akure",
      role: "Administrative staff",
      designation: "Administrative officer",
      class: "N/A",
      subject: "N/A",
      nokFullName: "Enter NOK's full name",
      nokPhoneNumber: "Enter NOK's phone number",
      nokEmailAddress: "Enter email address",
      nokHouseAddress: "15 Lobiside Street, Texas, Akure",
    },
    {
      id: "OSA-STAFF-0001",
      fullName: "Oluwafemi John",
      phoneNumber: "08123456789",
      emailAddress: "oluwafemijohn@gmail.com",
      dateOfBirth: "6th May, 1970",
      houseAddress: "15 Lobiside Street, Texas, Akure",
      role: "Administrative staff",
      designation: "Administrative officer",
      class: "N/A",
      subject: "N/A",
      nokFullName: "Enter NOK's full name",
      nokPhoneNumber: "Enter NOK's phone number",
      nokEmailAddress: "Enter email address",
      nokHouseAddress: "15 Lobiside Street, Texas, Akure",
    },
  ]);
  
  // const [staffList, setStaffList] = useState([]);

  const [viewMode, setViewMode] = useState<"list" | "add" | "edit" | "view">("list");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [formData, setFormData] = useState<Partial<Staff>>({});

  const itemsPerPage = 10;

  const handleInputChange = (field: keyof Staff, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleAddStaff = () => {
    setFormData({
      profilePicture: "",
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      dateOfBirth: "",
      houseAddress: "",
      role: "",
      designation: "",
      class: "",
      subject: "",
      nokFullName: "",
      nokPhoneNumber: "",
      nokEmailAddress: "",
      nokHouseAddress: "",
    });
    setCurrentStep(1);
    setViewMode("add");
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      setViewMode("list");
    }
  };

  const handleSave = () => {
    if (viewMode === "add") {
      const newStaff: Staff = {
        id: `OSA-STAFF-${String(staffList.length + 1).padStart(4, "0")}`,
        fullName: formData.fullName || "",
        phoneNumber: formData.phoneNumber || "",
        emailAddress: formData.emailAddress || "",
        dateOfBirth: formData.dateOfBirth || "",
        houseAddress: formData.houseAddress || "",
        role: formData.role || "",
        designation: formData.designation || "",
        class: formData.class || "",
        subject: formData.subject || "",
        nokFullName: formData.nokFullName || "",
        nokPhoneNumber: formData.nokPhoneNumber || "",
        nokEmailAddress: formData.nokEmailAddress || "",
        nokHouseAddress: formData.nokHouseAddress || "",
        profilePicture: formData.profilePicture || "",
      };
      setStaffList([...staffList, newStaff]);
      setViewMode("list");
      setCurrentStep(1);
    } else if (viewMode === "edit" && selectedStaff) {
      const updatedList = staffList.map((staff) =>
        staff.id === selectedStaff.id ? { ...staff, ...formData } : staff
      );
      setStaffList(updatedList as Staff[]);
      setViewMode("list");
    }
  };

  const handleView = (staff: Staff) => {
    setSelectedStaff(staff);
    setViewMode("view");
  };

  const handleEdit = (staff?: Staff) => {
    const staffToEdit = staff || selectedStaff;
    if (staffToEdit) {
      setSelectedStaff(staffToEdit);
      setFormData(staffToEdit);
      setViewMode("edit");
    }
  };

  const handleDelete = (id: string) => {
    setStaffList(staffList.filter((staff) => staff.id !== id));
  };

  return (
    <>
      {viewMode === "list" && (
        <StaffListView
          staffList={staffList}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onAddStaff={handleAddStaff}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onPageChange={setCurrentPage}
        />
      )}

      {viewMode === "add" && (
        <StaffForm

          currentStep={currentStep}
          formData={formData}
          onSave={handleSave}
          onBack={handleBack}
          onNext={handleNext}
          onChange={handleInputChange}
        />
      )}

      {(viewMode === "view" || viewMode === "edit") && selectedStaff && (
        <ViewStaffProfile
          staff={selectedStaff}
          isEdit={viewMode === "edit"}
          formData={formData}
          onChange={handleInputChange}
          onSave={handleSave}
          onBack={() => {
            if (viewMode === "edit") {
              setViewMode("view");
            } else {
              setViewMode("list");
            }
          }}
          onEdit={() => handleEdit()}
        />
      )}
    </>
  );
};

export default StaffManagement;
