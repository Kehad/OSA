/* eslint-disable react/prop-types */
import { Staff } from "./types";

interface WorkInformationFormProps {
  formData: Partial<Staff>;
  onChange: (field: keyof Staff, value: string) => void;
}

// Work Information Form Component
export const WorkInformationForm = ({ formData, onChange }: WorkInformationFormProps) => (
  <div>
    <h2 className="text-lg font-semibold mb-6 text-black">Work Information</h2>

    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Role *</label>
        <select
          value={formData.role}
          onChange={(e) => onChange('role', e.target.value)}
          className="w-full px-4 py-4 border border-gray-300 bg-white text-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="">Select role</option>
          <option value="Teacher">Teacher</option>
          <option value="Administrative staff">Administrative staff</option>
          <option value="Support staff">Support staff</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Designation *</label>
        <select
          value={formData.designation}
          onChange={(e) => onChange('designation', e.target.value)}
          className="w-full px-4 py-4 border border-gray-300  bg-white text-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="">Select designation</option>
          <option value="Administrative officer">Administrative officer</option>
          <option value="Senior teacher">Senior teacher</option>
          <option value="Junior teacher">Junior teacher</option>
        </select>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Class (for class teachers)</label>
        <select
          value={formData.class}
          onChange={(e) => onChange('class', e.target.value)}
          className="w-full px-4 py-4 border border-gray-300 bg-white text-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="">Select class</option>
          <option value="Primary 1">Primary 1</option>
          <option value="Primary 2">Primary 2</option>
          <option value="Primary 3">Primary 3</option>
          <option value="N/A">N/A</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Subject(s) (for subject teachers)</label>
        <select
          value={formData.subject}
          onChange={(e) => onChange('subject', e.target.value)}
          className="w-full px-4 py-4 border border-gray-300 bg-white text-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="">Select subject(s)</option>
          <option value="Mathematics">Mathematics</option>
          <option value="English">English</option>
          <option value="Science">Science</option>
          <option value="N/A">N/A</option>
        </select>
      </div>
    </div>
  </div>
);
