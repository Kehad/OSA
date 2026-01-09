import React from "react";

interface StepProps {
  formData: Record<string, any>;
  isEdit: boolean;
  onChange: (field: string, value: any) => void;
  entityType: "staff" | "student" | "parent";
}

const Step1_PersonalInfo = ({
  formData,
  isEdit,
  onChange,
  entityType,
}: StepProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName || ""}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-800"
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress || ""}
            onChange={handleChange}
            placeholder="john@example.com"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-800"
          />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="text" // using text to match your data format "6th May", change to "date" if needed
            name="dateOfBirth"
            value={formData.dateOfBirth || ""}
            onChange={handleChange}
            placeholder="e.g. 6th May"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-800"
          />
        </div>

        {/* Phone Contact */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact || ""}
            onChange={handleChange}
            placeholder="08012345678"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-800"
          />
        </div>

        {/* --- Fields Specific to Students (based on your data) --- */}
        {entityType === "student" && (
          <>
            <div className="col-span-2 border-t mt-2 pt-4">
               <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Medical & Stats</h3>
            </div>

            {/* Genotype */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Genotype</label>
              <select
                name="genotype"
                value={formData.genotype || ""}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-800"
              >
                <option value="">Select...</option>
                <option value="AA">AA</option>
                <option value="AS">AS</option>
                <option value="SS">SS</option>
              </select>
            </div>

            {/* Blood Group */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Blood Group</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup || ""}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-800"
              >
                <option value="">Select...</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
              </select>
            </div>

            {/* Height */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Height</label>
              <input
                type="text"
                name="height"
                value={formData.height || ""}
                onChange={handleChange}
                placeholder="e.g. 100cm"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-800"
              />
            </div>

            {/* Weight */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Weight</label>
              <input
                type="text"
                name="weight"
                value={formData.weight || ""}
                onChange={handleChange}
                placeholder="e.g. 45kg"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-800"
              />
            </div>

             {/* Sport House */}
             <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Sport House</label>
              <select
                name="sportHouse"
                value={formData.sportHouse || ""}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-800"
              >
                <option value="">Select House...</option>
                <option value="Love House">Love House</option>
                <option value="Peace House">Peace House</option>
                <option value="Joy House">Joy House</option>
              </select>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Step1_PersonalInfo;