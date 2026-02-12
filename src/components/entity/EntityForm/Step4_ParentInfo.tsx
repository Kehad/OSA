// src/components/entity/EntityForm/Step2_StudentPersonal.tsx
import React from "react";

interface StepProps {
  formData: Record<string, any>;
  onChange: (field: string, value: any) => void;
}

const Step2_StudentPersonal = ({ formData, onChange }: StepProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800">
        Personal Information
      </h2>

      {/* Profile Picture Upload */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 border border-gray-200 cursor-pointer hover:bg-gray-200 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
        <span className="text-sm text-gray-600 font-medium">Add profile picture</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* Surname */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Surname <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="surname"
            value={formData.surname || ""}
            onChange={handleChange}
            placeholder="Enter students surname"
            className="border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-green-800 w-full"
          />
        </div>

        {/* First Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">First Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName || ""}
            onChange={handleChange}
            placeholder="Enter students first name"
            className="border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-green-800 w-full"
          />
        </div>

        {/* Middle Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName || ""}
            onChange={handleChange}
            placeholder="Enter students middle name"
            className="border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-green-800 w-full"
          />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Date of Birth <span className="text-red-500">*</span></label>
          <div className="relative">
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth || ""}
              onChange={handleChange}
              className="border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-green-800 w-full text-gray-500"
            />
          </div>
        </div>

        {/* Class */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Class <span className="text-red-500">*</span></label>
          <select
            name="class"
            value={formData.class || ""}
            onChange={handleChange}
            className="border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-green-800 w-full bg-white"
          >
            <option value="">Select a class</option>
            <option value="JSS 1">JSS 1</option>
            <option value="JSS 2">JSS 2</option>
            <option value="SS 1">SS 1</option>
          </select>
        </div>

        {/* Subjects */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Subjects <span className="text-red-500">*</span></label>
          <select
            name="subjects"
            value={formData.subjects || ""}
            onChange={handleChange}
            className="border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-green-800 w-full bg-white"
          >
            <option value="">Select subjects</option>
            <option value="Science">Science</option>
            <option value="Arts">Arts</option>
          </select>
        </div>
      </div>

      <div className="pt-2">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Other Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Boarding Status */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">Boarding Status <span className="text-red-500">*</span></label>
              <select
                name="boardingStatus"
                value={formData.boardingStatus || ""}
                onChange={handleChange}
                className="border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-green-800 w-full bg-white"
              >
                <option value="">Select a status</option>
                <option value="Day Student">Day Student</option>
                <option value="Boarding">Boarding</option>
              </select>
            </div>

            {/* Sport House */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">Sport House <span className="text-red-500">*</span></label>
              <select
                name="sportHouse"
                value={formData.sportHouse || ""}
                onChange={handleChange}
                className="border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-green-800 w-full bg-white"
              >
                <option value="">Select a sport house</option>
                <option value="Love House">Love House</option>
                <option value="Peace House">Peace House</option>
              </select>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Step2_StudentPersonal;