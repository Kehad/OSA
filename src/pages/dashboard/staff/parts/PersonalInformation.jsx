/* eslint-disable react/prop-types */

import { Plus } from "lucide-react";

// Personal Information Form Component
const PersonalInformationForm = ({ formData, isEdit, onChange }) => (
  <div>
    <h2 className="text-lg text-black font-semibold mb-6">
      Personal Information
    </h2>

    <div className="mb-6 text-black flex items-center gap-2">
      <button className="flex items-center gap-2 px-5 py-5 border border-[#EEEEEE] bg-[#EEEEEE] rounded-full hover:bg-gray-50">
        <Plus className="w-5 h-5" />
      </button>
      {isEdit ? "Edit Picture" : "Add profile picture"}
    </div>

    {isEdit && (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Staff ID
        </label>
        <input
          type="text"
          value={formData.id}
          disabled
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
        />
      </div>
    )}

    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full name *
        </label>
        <input
          type="text"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
          className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone number *
        </label>
        <input
          type="text"
          placeholder="Enter phone number"
          value={formData.phoneNumber}
          onChange={(e) => onChange("phoneNumber", e.target.value)}
          className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email address
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          value={formData.emailAddress}
          onChange={(e) => onChange("emailAddress", e.target.value)}
          className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Date of birth *
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Select date of birth"
            value={formData.dateOfBirth}
            onChange={(e) => onChange("dateOfBirth", e.target.value)}
            className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          {/* <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" /> */}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          House address *
        </label>
        <textarea
          placeholder="Enter house address"
          value={formData.houseAddress}
          onChange={(e) => onChange("houseAddress", e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
    </div>
  </div>
);

export default PersonalInformationForm;
