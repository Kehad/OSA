/* eslint-disable react/prop-types */
import { Staff } from "./types";

interface NextOfKinFormProps {
  formData: Partial<Staff>;
  onChange: (field: keyof Staff, value: string) => void;
}

// Next of Kin Form Component
export const NextOfKinForm = ({ formData, onChange }: NextOfKinFormProps) => (
  <div>
    <h2 className="text-lg font-semibold mb-6 text-[#2B2B2B]">
      Next of Kin Information
    </h2>

    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-[18px] font-medium text-gray-700 mb-2">
          NOK&apos;s full name *
        </label>
        <input
          type="text"
          placeholder="Enter NOK's full name"
          value={formData.nokFullName}
          onChange={(e) => onChange("nokFullName", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-[18px] font-medium text-gray-700 mb-2">
          NOK&apos; s phone number *
        </label>
        <input
          type="text"
          placeholder="Enter NOK's phone number"
          value={formData.nokPhoneNumber}
          onChange={(e) => onChange("nokPhoneNumber", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <label className="block text-[18px] font-medium text-gray-700 mb-2">
          NOK&apos;s email Address
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          value={formData.nokEmailAddress}
          onChange={(e) => onChange("nokEmailAddress", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
    </div>

    <div className="mb-4 grid grid-cols-2">
      <div>
        <label className="block text-[18px] font-medium text-gray-700 mb-2">
          NOK&apos;s house address *
        </label>
        <textarea
          placeholder="Enter house address"
          value={formData.nokHouseAddress}
          onChange={(e) => onChange("nokHouseAddress", e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
    </div>
  </div>
);
