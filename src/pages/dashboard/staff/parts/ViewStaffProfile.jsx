/* eslint-disable react/prop-types */

import Button from "../../../../components/button/button";

// View Staff Profile Component
export const ViewStaffProfile = ({ staff, onBack, onEdit }) => (
  <div className="min-h-screen">
    <div className="bg-white shadow-sm">
      <div className="p-6  flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          View staff profile
        </h1>
        <button
          onClick={onEdit}
          className="px-6 py-2 text-sm font-medium text-white bg-green-800 rounded-lg hover:bg-green-900"
        >
          Edit
        </button>
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
                placeholder="Enter full name"
                value={staff.id}
                className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                value={staff.fullName}
                className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Phone number
              </label>

              <input
                type="text"
                placeholder="Enter full name"
                value={staff.phoneNumber}
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
                placeholder="Enter full name"
                value={staff.emailAddress}
                className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Date of birth
              </label>

              <input
                type="text"
                placeholder="Enter full name"
                value={staff.dateOfBirth}
                className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-500 mb-1">
                House address
              </label>

              <input
                type="text"
                placeholder="Enter full name"
                value={staff.houseAddress}
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

              <input
                type="text"
                placeholder="Enter full name"
                value={staff.role}
                className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Designation
              </label>

              <input
                type="text"
                placeholder="Enter full name"
                value={staff.designation}
                className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Class (for class teachers)
              </label>

              <input
                type="text"
                placeholder="Enter full name"
                value={staff.class}
                className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Subject(s) (for subject teachers)
              </label>

              <input
                type="text"
                placeholder="Enter full name"
                value={staff.subject}
                className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
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
                NOK&apos; full name
              </label>
              <p className="text-gray-900">{staff.nokFullName}</p>
              <input
                type="text"
                placeholder="Enter full name"
                value={staff.id}
                className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                NOK&apos; phone number
              </label>
              <p className="text-gray-900">{staff.nokPhoneNumber}</p>
              <input
                type="text"
                placeholder="Enter full name"
                value={staff.id}
                className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-500 mb-1">
                NOK&apos; email Address
              </label>
              <p className="text-gray-900">{staff.nokEmailAddress}</p>
              <input
                type="text"
                placeholder="Enter full name"
                value={staff.id}
                className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-500 mb-1">
                NOK&apos; house address
              </label>
              <p className="text-gray-900">{staff.nokHouseAddress}</p>
              <input
                type="text"
                placeholder="Enter full name"
                value={staff.id}
                className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8 gap-5">
          <Button
            text={"Back"}
            onClick={onBack}
            variant="outline"
            colorScheme="white"
            className="px-20 font-bold"
            size="xl"
          />
          <Button
            text={"Edit"}
            onClick={onEdit}
            className="px-20 font-bold"
            size="xl"
          />
        </div>
      </div>
    </div>
  </div>
);
