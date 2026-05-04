/* eslint-disable react/prop-types */
import { Edit2, Trash2 } from "lucide-react";
import { Staff } from "./types";

interface StaffTableProps {
  staff: Staff[];
  startIndex: number;
  onView: (staff: Staff) => void;
  onEdit: (staff: Staff) => void;
  onDelete: (id: string) => void;
}

// Staff Table Component
export const StaffTable = ({
  staff,
  startIndex,
  onView,
  onEdit,
  onDelete,
}: StaffTableProps) => (
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
