/* eslint-disable react/prop-types */

import Button from "../../../../components/ui/button";
import { Staff } from "./types";

interface ViewStaffProfileProps {
  staff: Staff;
  isEdit?: boolean;
  formData?: Partial<Staff>;
  onChange?: (field: keyof Staff, value: string) => void;
  onSave?: () => void;
  onBack: () => void;
  onEdit: () => void;
}

// View Staff Profile Component
export const ViewStaffProfile = ({
  staff,
  isEdit = false,
  formData,
  onChange,
  onSave,
  onBack,
  onEdit,
}: ViewStaffProfileProps) => {
  const getValue = (field: keyof Staff) => {
    if (isEdit && formData) {
      return formData[field] || "";
    }
    return staff[field] || "";
  };

  const handleChange = (field: keyof Staff, value: string) => {
    if (isEdit && onChange) {
      onChange(field, value);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-white shadow-sm">
        <div className="p-6  flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            {isEdit ? "Edit Staff Profile" : "View Staff Profile"}
          </h1>
          {isEdit ? (
            <button
              onClick={onSave}
              className="px-6 py-2 text-sm font-medium text-white bg-green-800 rounded-lg hover:bg-green-900"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={onEdit}
              className="px-6 py-2 text-sm font-medium text-white bg-green-800 rounded-lg hover:bg-green-900"
            >
              Edit
            </button>
          )}
        </div>

        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-black">
              Personal Information
            </h2>
            <div className="w-20 h-20 bg-gray-200 rounded-full mb-6"></div>

            <div className="grid grid-cols- gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Staff ID
                </label>
                <input
                  type="text"
                  placeholder="Enter staff ID"
                  value={getValue("id")}
                  readOnly={true} // ID usually shouldn't be edited
                  className="w-full px-4 py-2 border text-black bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Full name
                </label>

                <input
                  type="text"
                  placeholder="Enter full name"
                  value={getValue("fullName")}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  readOnly={!isEdit}
                  className={`w-full px-4 py-2 border text-black ${!isEdit ? "bg-white" : "bg-white"
                    } border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Phone number
                </label>

                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={getValue("phoneNumber")}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                  readOnly={!isEdit}
                  className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Email address
                </label>

                <input
                  type="text"
                  placeholder="Enter email address"
                  value={getValue("emailAddress")}
                  onChange={(e) => handleChange("emailAddress", e.target.value)}
                  readOnly={!isEdit}
                  className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Date of birth
                </label>

                <input
                  type="text"
                  placeholder="Enter date of birth"
                  value={getValue("dateOfBirth")}
                  onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                  readOnly={!isEdit}
                  className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  House address
                </label>

                <input
                  type="text"
                  placeholder="Enter house address"
                  value={getValue("houseAddress")}
                  onChange={(e) => handleChange("houseAddress", e.target.value)}
                  readOnly={!isEdit}
                  className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="mb-8 border-t pt-6">
            <h2 className="text-lg font-semibold mb-4">Work Information</h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Role
                </label>

                {isEdit ? (
                  <select
                    value={getValue("role")}
                    onChange={(e) => handleChange("role", e.target.value)}
                    className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select role</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Administrative staff">Administrative staff</option>
                    <option value="Support staff">Support staff</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    value={getValue("role")}
                    readOnly
                    className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Designation
                </label>

                {isEdit ? (
                  <select
                    value={getValue("designation")}
                    onChange={(e) => handleChange("designation", e.target.value)}
                    className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select designation</option>
                    <option value="Administrative officer">Administrative officer</option>
                    <option value="Senior teacher">Senior teacher</option>
                    <option value="Junior teacher">Junior teacher</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    value={getValue("designation")}
                    readOnly
                    className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Class (for class teachers)
                </label>

                {isEdit ? (
                  <select
                    value={getValue("class")}
                    onChange={(e) => handleChange("class", e.target.value)}
                    className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select class</option>
                    <option value="Primary 1">Primary 1</option>
                    <option value="Primary 2">Primary 2</option>
                    <option value="Primary 3">Primary 3</option>
                    <option value="N/A">N/A</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    value={getValue("class")}
                    readOnly
                    className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Subject(s) (for subject teachers)
                </label>

                {isEdit ? (
                  <select
                    value={getValue("subject")}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select subject(s)</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                    <option value="N/A">N/A</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    value={getValue("subject")}
                    readOnly
                    className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="mb-8 border-t pt-6">
            <h2 className="text-lg font-semibold mb-4">
              Next of Kin Information
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  NOK&apos;s full name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={getValue("nokFullName")}
                  onChange={(e) => handleChange("nokFullName", e.target.value)}
                  readOnly={!isEdit}
                  className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  NOK&apos;s phone number
                </label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={getValue("nokPhoneNumber")}
                  onChange={(e) => handleChange("nokPhoneNumber", e.target.value)}
                  readOnly={!isEdit}
                  className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  NOK&apos;s email Address
                </label>
                <input
                  type="text"
                  placeholder="Enter email address"
                  value={getValue("nokEmailAddress")}
                  onChange={(e) => handleChange("nokEmailAddress", e.target.value)}
                  readOnly={!isEdit}
                  className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  NOK&apos;s house address
                </label>
                <input
                  type="text"
                  placeholder="Enter house address"
                  value={getValue("nokHouseAddress")}
                  onChange={(e) => handleChange("nokHouseAddress", e.target.value)}
                  readOnly={!isEdit}
                  className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 gap-5">
            <Button
              text={isEdit ? "Cancel" : "Back"}
              onClick={onBack}
              variant="outline"
              colorScheme="gray"
              className="px-20 font-bold"
              size="lg"
            />
            {!isEdit && (
              <Button
                text={"Edit"}
                onClick={onEdit}
                className="px-20 font-bold"
                size="lg"
              />
            )}
            {isEdit && (
              <Button
                text={"Save"}
                onClick={onSave}
                className="px-20 font-bold"
                size="lg"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
