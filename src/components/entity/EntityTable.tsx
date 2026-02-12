import React from "react";

function EntityTable({ entities, onView, onEdit, onDelete, config }) {
  console.log(entities, config);
  if (config?.entityType === "staff") {
    return (
      <StaffTable
        staff={entities}
        startIndex={0}
        onView={onView}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
  } else if (config?.entityType === "student") {
    return (
      <StudentTable
        staff={entities}
        startIndex={0}
        onView={onView}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
  }
  return <div>Entity Table</div>;
}

export default EntityTable;

/* eslint-disable react/prop-types */
import { Edit2, Trash2 } from "lucide-react";

// Staff Table Component
export const StaffTable = ({ staff, startIndex, onView, onEdit, onDelete }) => (
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className=" border-b border-gray-200">
        <tr>
          <th className="px-6 py-3 text-left text-[18px] font-medium text-[#808080] ">
            No.
          </th>
          <th className="px-6 py-3 text-left text-[18px] font-medium text-[#808080]">
            Full Name
          </th>
          <th className="px-6 py-3 text-left text-[18px] font-medium text-[#808080]">
            Phone Number
          </th>
          <th className="px-6 py-3 text-left text-[18px] font-medium text-[#808080]">
            Email Address
          </th>
          <th className="px-6 py-3 text-left text-[18px] font-medium text-[#808080]">
            Role
          </th>
          <th className="px-6 py-3 text-left text-[18px] font-medium text-[#808080]">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {staff.map((staffMember, index) => (
          <tr key={staffMember.id} className="hover:bg-gray-50 cursor-pointer">
            <td
              className="px-6 py-4 text-[18px] text-black"
              onClick={() => onView(staffMember)}
            >
              {String(startIndex + index + 1).padStart(2, "0")}
            </td>
            <td
              className="px-6 py-4 text-[18px] text-black"
              onClick={() => onView(staffMember)}
            >
              {staffMember.fullName}
            </td>
            <td
              className="px-6 py-4 text-[18px] text-black"
              onClick={() => onView(staffMember)}
            >
              {staffMember.phoneNumber}
            </td>
            <td
              className="px-6 py-4 text-[18px] text-black"
              onClick={() => onView(staffMember)}
            >
              {staffMember.emailAddress}
            </td>
            <td
              className="px-6 py-4 text-[18px] text-black"
              onClick={() => onView(staffMember)}
            >
              {staffMember.role}
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(staffMember);
                  }}
                  className="text-green-600 hover:text-green-800"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(staffMember.id);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Staff Table Component
export const StudentTable = ({
  staff,
  startIndex,
  onView,
  onEdit,
  onDelete,
}) => (
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className=" border-b border-gray-200">
        <tr>
          <th className="px-6 py-3 text-left text-[18px] font-medium text-[#808080]">
            No.
          </th>
          <th className="px-6 py-3 text-left text-[18px] font-medium text-[#808080]">
            Full Name
          </th>
          <th className="px-6 py-3 text-left text-[18px] font-medium text-[#808080]">
            Class
          </th>
          <th className="px-6 py-3 text-left text-[18px] font-medium text-[#808080]">
            Contact
          </th>
          <th className="px-6 py-3 text-left text-[18px] font-medium text-[#808080]">
            Fees Status
          </th>
          <th className="px-6 py-3 text-left text-[18px] font-medium text-[#808080]">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {staff.map((staffMember, index) => (
          <tr key={staffMember.id} className="hover:bg-gray-50 cursor-pointer">
            <td
              className="px-6 py-4 text-[18px] text-black"
              onClick={() => onView(staffMember)}
            >
              {String(startIndex + index + 1).padStart(2, "0")}
            </td>
            <td
              className="px-6 py-4 text-[18px] text-black"
              onClick={() => onView(staffMember)}
            >
              {staffMember.fullName}
            </td>
            <td
              className="px-6 py-4 text-[18px] text-black"
              onClick={() => onView(staffMember)}
            >
              {staffMember.class}
            </td>
            <td
              className="px-6 py-4 text-[18px] text-black"
              onClick={() => onView(staffMember)}
            >
              {staffMember.contact}
            </td>
            <td
              className="px-6 py-4 text-[18px] text-black"
              onClick={() => onView(staffMember)}
            >
              <div
                className={`${
                  staffMember.feesStatus === "Paid"
                    ? "bg-[#1BB133]"
                    : "bg-[#C01E1E]"
                } text-white rounded-[15px] px-7 py-2 w-max`}
              >
                {staffMember.feesStatus}
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(staffMember);
                  }}
                  className="text-green-600 hover:text-green-800"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(staffMember.id);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
