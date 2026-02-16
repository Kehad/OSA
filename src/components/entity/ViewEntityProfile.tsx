// src/components/entity/ViewEntityProfile.tsx

import { Entity, EntityConfigItem } from "./EntityManagement";
import DynamicForm, { FormField } from "@/components/ui/form"; // Adjust path
import Button from "@/components/ui/button"; // Adjust path

interface ViewEntityProfileProps {
  entity: Entity;
  entityType: string;
  onBack: () => void;
  onEdit: () => void;
  onSave: (data: Partial<Entity>) => void;
  config?: EntityConfigItem;
  planMode?: string;
}

const ViewEntityProfile = ({
  entity,
  entityType,
  onBack,
  onEdit,
  onSave,
  planMode
}: ViewEntityProfileProps) => {

  // Configuration matching "Screenshot 2026-01-07 000652.png"
  const viewFields: FormField[] = [
    // --- Personal Information ---
    { name: "id", label: "Student ID", type: "input" },
    {
      name: "feesStatus",
      label: "Fees Status",
      type: "custom",
      renderCustom: (value) => (
        <span className={`inline-block px-20 py-2 rounded-md text-white text-sm font-medium ${value === 'Paid' ? 'bg-[#16a34a]' : 'bg-red-500'}`}>
          {value || "Unpaid"}
        </span>
      )
    },
    { name: "surname", label: "Surname", type: "input" },
    { name: "firstName", label: "First Name", type: "input" },
    { name: "middleName", label: "Middle Name", type: "input" },
    { name: "dateOfBirth", label: "Date of Birth", type: "input" }, // Treated as text for view
    { name: "class", label: "Class", type: "input" },
    { name: "subject", label: "Subjects", type: "input" },
    { name: "emailAddress", label: "Email Address", type: "input" },

    // --- Other Information ---
    { name: "divider_other", label: "Other Information", type: "divider" },
    { name: "boardingStatus", label: "Boarding Status", type: "input" },
    { name: "sportHouse", label: "Sport House", type: "input" },

    // --- Health Information ---
    { name: "divider_health", label: "Health Information", type: "divider" },
    { name: "bloodGroup", label: "Blood Group", type: "input" },
    { name: "genotype", label: "Genotype", type: "input" },
    { name: "height", label: "Height", type: "input" },
    { name: "weight", label: "Weight", type: "input" },

    // --- Parent Information ---
    { name: "divider_parent", label: "Parent Information", type: "divider" },
    { name: "fatherName", label: "Father's name", type: "input" },
    { name: "motherName", label: "Mother's name", type: "input" },
    { name: "parentId", label: "Parent ID", type: "input" },
    { name: "contact", label: "Phone number", type: "input" },
    { name: "nokPhoneNumber", label: "Next of Kin Phone", type: "input" },
  ];



  return (
    <div className="min-h-screen bg-white p-8">
      <div className="">

        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            {planMode === "view" ? "View" : "Edit"} {entityType} profile
          </h1>
          <Button
            text={planMode === "view" ? "Edit" : "Save"}
            onClick={onEdit}
            className="bg-[#1b3b2a] text-white px-[4rem] py-2 rounded-lg"
          />
        </div>

        <h2 className="text-lg font-medium text-gray-600 mb-6">Personal Information</h2>

        <DynamicForm
          fields={viewFields}
          initialValues={entity}
          onEdit={onEdit} // The primary button in view mode acts as Edit
          onSubmit={onSave} // The primary button in view mode acts as Edit
          submitButtonText={planMode === "view" ? "Edit" : "Save"}
          onBack={onBack}
          planMode={planMode}
          readOnly={planMode === "view"} // Triggers the view-only styling
        >
          {/* Profile Picture Placeholder */}
          <div className="mb-8">
            <div className="w-24 h-24 rounded-full bg-[#f0f0f0]"></div>
          </div>
        </DynamicForm>
      </div>
    </div>
  );
};

export default ViewEntityProfile;