import React, { useEffect, useRef, useState } from "react";

// --- 1. Type Definitions ---

export interface Student {
  id: string | number;
  fullName: string;
  class: string;
  contact: string;
  feesStatus: "Paid" | "Unpaid" | string; // flexible for other statuses
  [key: string]: any; // Allow other properties
}

interface StudentTableProps {
  students: Student[];
  startIndex: number;
  onView: (student: Student) => void;
  onEdit: (student: Student) => void;
  onDelete: (id: string | number) => void;
  onAddToGraduated?: (student: Student) => void; // Optional if not always used
}

// Configuration interface for columns
interface ColumnConfig {
  header: string;
  width: string; // e.g., "5%", "150px", 'auto'
  align?: "left" | "center" | "right";
}

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
        students={entities}
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
import { Edit2, Ellipsis, EllipsisIcon, EllipsisVertical, Trash, Trash2 } from "lucide-react";

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

const useClickOutside = (handler: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler]);

  return ref;
};

// --- 3. Sub-component for Status Badge ---

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const isPaid = status?.toLowerCase() === "paid";

  return (
    <span
      className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium text-white min-w-[250px] ${
        isPaid ? "bg-[#1BB133]" : "bg-[#C01E1E]"
      }`}
    >
      {status}
    </span>
  );
};

// --- 3. Main Component ---
export const StudentTable: React.FC<StudentTableProps> = ({
  students = [],
  startIndex = 0,
  onView,
  onEdit,
  onDelete,
  onAddToGraduated,
}) => {
  const [openMenuId, setOpenMenuId] = useState(null);
  
  // Close menu function used by the hook
  const closeMenu = () => setOpenMenuId(null);
  
  // Attach the hook to the dropdown container ref
  const menuRef = useClickOutside(closeMenu);

  const handleToggleMenu = (e, id) => {
    e.stopPropagation(); // Prevent triggering row click
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const columns: ColumnConfig[] = [
    { header: "No.", width: "80px", align: "left" },
    { header: "Full Name", width: "25%", align: "left" },
    { header: "Class", width: "15%", align: "left" },
    { header: "Contact", width: "20%", align: "left" },
    { header: "Fees Status", width: "20%", align: "left" },
    { header: "Action", width: "100px", align: "center" },
  ];

  const handleAction = (e, actionCallback, item) => {
    e.stopPropagation();
    actionCallback(item);
    closeMenu();
  };

  return (
    <div className="w-full overflow-hidden bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="overflow-x-auto min-h-[400px] pb-20"> 
        <table className="w-full whitespace-nowrap">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
             {columns.map((col) => (
                <th
                  key={col.header}
                  style={{ width: col.width }} // Apply the width here
                  className={`px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider ${
                    col.align === "center" ? "text-center" : "text-left"
                  }`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-200">
            {students.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-10 text-center text-gray-500">
                  No students found.
                </td>
              </tr>
            ) : (
              students.map((student, index) => (
                <tr
                  key={student.id}
                  onClick={() => onView(student)}
                  className="hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {String(startIndex + index + 1).padStart(2, "0")}
                  </td>
                  
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {student.fullName}
                  </td>
                  
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {student.class}
                  </td>
                  
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {student.contact}
                  </td>
                  
                  <td className="px-6 py-4 w-[150px]">
                    <StatusBadge status={student.feesStatus} />
                  </td>
                  
                  {/* Action Column */}
                  <td className="px-6 py-4">
                    <div className="relative">
                      <button
                        onClick={(e) => handleToggleMenu(e, student.id)}
                        className={`p-2 rounded-full transition-colors ${
                          openMenuId === student.id 
                            ? "bg-gray-200 text-gray-900" 
                            : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <Ellipsis className="w-5 h-5" />
                      </button>

                      {/* Dropdown Menu */}
                      {openMenuId === student.id && (
                        <div
                          ref={menuRef}
                          className="absolute right-0 top-full mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-100 z-50 overflow-hidden ring-1 ring-black ring-opacity-5"
                          onClick={(e) => e.stopPropagation()} 
                        >
                          <div className="py-1">
                            <button
                              onClick={(e) => handleAction(e, onEdit, student)}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                            >
                              Edit Details
                            </button>
                            
                            <button
                              onClick={(e) => handleAction(e, onAddToGraduated, student)}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                            >
                              Add to Graduated
                            </button>
                            
                            <div className="border-t border-gray-100 my-1"></div>
                            
                            <button
                              onClick={(e) => handleAction(e, onDelete, student.id)}
                              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                            >
                              Delete Student
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};