import { StudentFeeData } from "../types";

// Student Table Component
const StudentTable = () => {
  const students: StudentFeeData[] = [
    {
      name: "Nwachi Victory O...",
      class: "SS 1 Blue",
      contact: "08123456789",
      status: "Paid",
    },
    {
      name: "Nwachi Victory O...",
      class: "SS 1 Blue",
      contact: "08123456789",
      status: "Paid",
    },
    {
      name: "Nwachi Victory O...",
      class: "SS 1 Blue",
      contact: "08123456789",
      status: "Unpaid",
    },
    {
      name: "Nwachi Victory O...",
      class: "SS 1 Blue",
      contact: "08123456789",
      status: "Paid",
    },
    {
      name: "Nwachi Victory O...",
      class: "SS 1 Blue",
      contact: "08123456789",
      status: "Paid",
    },
    {
      name: "Nwachi Victory O...",
      class: "SS 1 Blue",
      contact: "08123456789",
      status: "Paid",
    },
    {
      name: "Nwachi Victory O...",
      class: "SS 1 Blue",
      contact: "08123456789",
      status: "Paid",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Student Attendance
        </h3>
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
                <td className="py-4 px-0 text-sm text-gray-900">
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