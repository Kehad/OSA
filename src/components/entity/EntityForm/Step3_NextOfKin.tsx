// src/components/entity/EntityForm/Step3_StudentHealth.tsx
import React from "react";

interface StepProps {
  formData: Record<string, any>;
  onChange: (field: string, value: any) => void;
}

const Step3_NextOfKin = ({ formData, onChange }: StepProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Health Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* Blood Group */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Blood Group</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup || ""}
            onChange={handleChange}
            className="border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-green-800 w-full bg-white"
          >
            <option value="">Select a blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* Genotype */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Genotype</label>
          <select
            name="genotype"
            value={formData.genotype || ""}
            onChange={handleChange}
            className="border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-green-800 w-full bg-white"
          >
            <option value="">Select a genotype</option>
            <option value="AA">AA</option>
            <option value="AS">AS</option>
            <option value="SS">SS</option>
            <option value="AC">AC</option>
          </select>
        </div>

        {/* Height */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Height</label>
          <input
            type="text"
            name="height"
            value={formData.height || ""}
            onChange={handleChange}
            placeholder="Enter height in meters"
            className="border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-green-800 w-full"
          />
        </div>

        {/* Weight */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Weight</label>
          <input
            type="text"
            name="weight"
            value={formData.weight || ""}
            onChange={handleChange}
            placeholder="Enter weight in kg"
            className="border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-green-800 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Step3_NextOfKin;