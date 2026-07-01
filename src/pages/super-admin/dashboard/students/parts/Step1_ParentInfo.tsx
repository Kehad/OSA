// src/components/entity/EntityForm/Step1_ParentInfo.tsx
import DynamicForm, { FormField } from "@/components/ui/form";
// import React from "react";
// import DynamicForm, { FormField } from "./DynamicForm"; // Adjust import path as needed

import { StepProps } from "../types";

const Step1_ParentInfo = ({ formData, onChange, onNext, onBack }: StepProps) => {

  // 1. Configure the search field using the DynamicForm structure
  const searchFields: FormField[] = [
    {
      name: "parentPhoneNumber",
      label: "Parent Phone Number",
      type: "input",
      placeholder: "Enter parent phone number",
      validation: {
        required: "Phone number is required",
        pattern: {
          value: /^[0-9+\-\s()]*$/,
          message: "Please enter a valid phone number",
        },
      },
    },

  ];

  // 2. Handle the Form Submission (The Search Action)
  const handleSearchSubmit = async (data: any) => {
    // Update the parent formData state
    console.log(data.phoneNumber)
    onChange({ parentPhoneNumber: data.parentPhoneNumber });

    // Simulate API search or logic here
    console.log("Searching for parent:", data.parentPhoneNumber);

    // If you want to automatically move next upon valid search:
    if (onNext) onNext();
  };

  const handleCreateNew = () => {
    // Logic to switch to "Create New Parent" mode
    console.log("Switching to Create New Parent Profile...");
    // You might want to clear the phone search or set a flag in formData
    onChange({ isNewParent: true });
    if (onNext) onNext();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Parent Information
        </h2>
        {onBack && (
          <button
            onClick={onBack}
            className="text-gray-500 hover:text-gray-700 text-sm font-medium"
          >
            Cancel
          </button>
        )}
      </div>

      <div className="space-y-4 max-w-[30rem]">
        <p className="text-gray-600 text-xl">Select already existing Parent</p>

        {/* 3. Render DynamicForm for the Input and Search Button */}
        <DynamicForm
          fields={searchFields}
          initialValues={{ parentPhoneNumber: formData.parentPhoneNumber }}
          onSubmit={handleSearchSubmit}
          submitButtonText="Search"
          className="w-full p-0 bg-transparent shadow-none"
        />


        {/* 4. The "OR" Divider */}
        <div className="relative py-2">
          <div className="relative flex justify-start">
            <span className="pr-2 bg-white text-[20px] text-[#2B2B2B] font-medium">
              OR
            </span>
          </div>
        </div>

        {/* 5. The "Create New" Button */}
        <button
          onClick={handleCreateNew}
          type="button"
          className="w-full border border-gray-200 font-semibold text-[#1b3b2a] text-lg py-2.5 rounded-md hover:bg-gray-50 transition-colors bg-white shadow-sm"
        >
          Create New Parent Profile
        </button>
      </div>
    </div>
  );
};

export default Step1_ParentInfo;