// src/components/entity/EntityForm/Step2_PersonalInfo.tsx
import DynamicForm, { FormField } from "@/components/ui/form";
import React from "react";

import { StepProps } from "../types";

const Step2_PersonalInfo = ({ formData, onChange, onNext, onBack }: StepProps) => {

  // 1. Define the configuration for the form fields
  const formFields: FormField[] = [
    // --- Personal Information Section ---
    {
      name: "surname",
      label: "Surname",
      type: "input",
      placeholder: "Enter students surname",
      validation: { required: "Surname is required" },
    },
    {
      name: "firstName",
      label: "First Name",
      type: "input",
      placeholder: "Enter students first name",
      validation: { required: "First name is required" },
    },
    {
      name: "middleName",
      label: "Middle Name",
      type: "input",
      placeholder: "Enter students middle name",
    },
    {
      name: "dateOfBirth",
      label: "Date of Birth",
      type: "date",
      placeholder: "Select date of birth",
      validation: { required: "Date of birth is required" },
    },
    {
      name: "class",
      label: "Class",
      type: "select",
      placeholder: "Select a class",
      validation: { required: "Class is required" },
      options: [
        { label: "JSS 1", value: "JSS 1" },
        { label: "JSS 2", value: "JSS 2" },
        { label: "SS 1", value: "SS 1" },
      ],
    },
    {
      name: "subjects",
      label: "Subjects",
      type: "select",
      placeholder: "Select subjects",
      validation: { required: "Subjects are required" },
      options: [
        { label: "Science", value: "Science" },
        { label: "Arts", value: "Arts" },
        { label: "Commercial", value: "Commercial" },
      ],
    },

    // --- Divider for "Other Information" ---
    {
      name: "divider_other",
      label: "Other Information",
      type: "divider",
    },

    // --- Other Information Section ---
    {
      name: "boardingStatus",
      label: "Boarding Status",
      type: "select",
      placeholder: "Select a status",
      validation: { required: "Boarding status is required" },
      options: [
        { label: "Day Student", value: "Day Student" },
        { label: "Boarding", value: "Boarding" },
      ],
    },
    {
      name: "sportHouse",
      label: "Sport House",
      type: "select",
      placeholder: "Select a sport house",
      validation: { required: "Sport house is required" },
      options: [
        { label: "Love House", value: "Love House" },
        { label: "Peace House", value: "Peace House" },
        { label: "Joy House", value: "Joy House" },
      ],
    },
  ];

  // 2. Handle Form Submission
  const handleNext = (data: any) => {
    // Merge new data with existing formData
    // Object.keys(data).forEach((key) => {
    //   // @ts-ignore
    //   if (onChange) onChange(key, data[key]);
    // });
    console.log(data)
    if (onChange) onChange(data);

    onNext?.();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Personal Information
      </h2>

      <DynamicForm
        fields={formFields}
        initialValues={formData}
        onSubmit={handleNext}
        onBack={onBack}
        submitButtonText="Next"
        className="w-full"
      >
        {/* 3. Insert the Profile Picture UI as a child of the form 
               so it sits at the top (visually matching the screenshot) */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-[5rem] h-[5rem] bg-gray-100 rounded-full flex items-center justify-center text-gray-400 border border-gray-200 cursor-pointer hover:bg-gray-200 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <span className="text-xl text-gray-600 font-medium">
            Add profile picture
          </span>
        </div>
      </DynamicForm>
    </div>
  );
};

export default Step2_PersonalInfo;