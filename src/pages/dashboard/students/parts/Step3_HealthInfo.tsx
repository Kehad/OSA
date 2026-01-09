// src/components/entity/EntityForm/Step3_HealthInfo.tsx
import React from "react";
import DynamicForm, { FormField } from "@/components/ui/form"; // Adjust path as needed

interface StepProps {
  formData: Record<string, any>;
  onChange: (data: Record<string, any>) => void;
  onSave: () => void; // Use onSave since this is the final step
  onBack: () => void;
}

const Step3_HealthInfo = ({ formData, onChange, onSave, onBack }: StepProps) => {

  // Define fields based on Screenshot 2026-01-07 000635.png
  const formFields: FormField[] = [
    {
      name: "bloodGroup",
      label: "Blood Group",
      type: "select",
      placeholder: "Select a blood group",
      options: [
        { label: "A+", value: "A+" },
        { label: "A-", value: "A-" },
        { label: "B+", value: "B+" },
        { label: "B-", value: "B-" },
        { label: "O+", value: "O+" },
        { label: "O-", value: "O-" },
        { label: "AB+", value: "AB+" },
        { label: "AB-", value: "AB-" },
      ],
    },
    {
      name: "genotype",
      label: "Genotype",
      type: "select",
      placeholder: "Select a genotype",
      options: [
        { label: "AA", value: "AA" },
        { label: "AS", value: "AS" },
        { label: "SS", value: "SS" },
        { label: "AC", value: "AC" },
      ],
    },
    {
      name: "height",
      label: "Height",
      type: "input",
      placeholder: "Enter height in meters",
    },
    {
      name: "weight",
      label: "Weight",
      type: "input",
      placeholder: "Enter weight in kg",
    },
  ];

  const handleSave = (data: any) => {
    // Bulk update parent state before saving
    Object.keys(data).forEach((key) => {
      // @ts-ignore
      if (onChange) onChange(key, data[key]);
    });
    
    // Trigger the final save action
    onSave();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Health Information
      </h2>

      <DynamicForm
        fields={formFields}
        initialValues={formData}
        onSubmit={handleSave}
        onBack={onBack}
        submitButtonText="Done" // Matches the button in the screenshot
        className="w-full"
      />
    </div>
  );
};

export default Step3_HealthInfo;