import React from "react";
import { StudentFeeData } from "../types";

interface StudentTableProps {
  role?: string;
}

const StudentTable: React.FC<StudentTableProps> = ({ role }) => {
  if (role === "student") {
    const courses = [
      { code: "MTH 301", title: "Mathematics", teacher: "Mr. David", time: "08:00 - 09:30 AM", grade: "A" },
      { code: "PHY 302", title: "Physics", teacher: "Dr. Chukwu", time: "09:30 - 11:00 AM", grade: "A-" },
      { code: "CHM 303", title: "Chemistry", teacher: "Mrs. Adebayo", time: "11:30 - 01:00 PM", grade: "B+" },
      { code: "ENG 301", title: "English Language", teacher: "Mrs. Okeke", time: "01:30 - 03:00 PM", grade: "A" },
      { code: "BIO 304", title: "Biology", teacher: "Mr. Nachi", time: "03:00 - 04:30 PM", grade: "A" },
    ];

    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            My Enrolled Subjects & Schedule
          </h3>
          <span className="text-xs font-semibold px-3 py-1 bg-green-100 text-green-800 rounded-full">
            Term 1 Active
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-0 text-sm font-medium text-gray-500">
                  Subject
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                  Teacher
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                  Time Slot
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="py-4 px-0 text-sm font-semibold text-gray-900">
                    {course.title} <span className="text-gray-400 text-xs">({course.code})</span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{course.teacher}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{course.time}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200">
                      {course.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  const students: StudentFeeData[] = [
    {
      name: "Nwachi Victory O.",
      class: "SS 1 Blue",
      contact: "08123456789",
      status: "Paid",
    },
    {
      name: "Chidimma Grace N.",
      class: "SS 2 Gold",
      contact: "08098765432",
      status: "Paid",
    },
    {
      name: "Kalu Emmanuel K.",
      class: "SS 1 Red",
      contact: "07011223344",
      status: "Unpaid",
    },
    {
      name: "Adebayo Tosin M.",
      class: "SS 3 Science",
      contact: "08155667788",
      status: "Paid",
    },
    {
      name: "Okonkwo Blessing C.",
      class: "SS 1 Blue",
      contact: "09033445566",
      status: "Paid",
    },
  ];

  const title =
    role === "admin"
      ? "Class Student Roster & Fees"
      : "School Student Registry & Fees Status";

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <button className="text-blue-500 hover:text-blue-600 text-sm font-medium hover:underline">
          See all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-0 text-sm font-medium text-gray-500">
                Full Name
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Class
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Contact
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Fees status
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={index}
                className="border-b border-gray-50 hover:bg-gray-50/50"
              >
                <td className="py-4 px-0 text-sm text-gray-900 font-medium">
                  {student.name}
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">
                  {student.class}
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">
                  {student.contact}
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`inline-flex items-center px-5 py-1 rounded-full text-xs font-medium ${
                      student.status === "Paid"
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;