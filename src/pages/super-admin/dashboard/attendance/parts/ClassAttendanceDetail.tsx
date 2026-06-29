import React from "react";
import { ArrowLeft, Calendar, Download } from "lucide-react";

interface ClassAttendanceDetailProps {
  className: string;
  onBack: () => void;
}

const studentData = Array(30)
  .fill({
    id: "01",
    name: "Nwachi Victory Onyekachi",
    status: "Present",
  })
  .map((s, i) => ({
    ...s,
    id: (i + 1).toString().padStart(2, "0"),
    status: i % 4 === 3 ? "Absent" : "Present",
  }));

const ClassAttendanceDetail: React.FC<ClassAttendanceDetailProps> = ({
  className,
  onBack,
}) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <button className="bg-[#1C3A1C] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#152a15] transition-colors font-bold">
          <Download className="w-5 h-5" /> Export
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">{className}</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 bg-white">
            <span className="text-sm font-bold text-gray-400 border-r pr-2 mr-2">
              Date
            </span>
            <span className="text-sm text-gray-800">10 - 03 - 2025</span>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex gap-8 items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
        <div>
          <p className="text-md text-gray-500 mb-1">
            Class: <span className="font-bold text-gray-800">Primary 1</span>
          </p>
        </div>
        <div>
          <p className="text-md text-gray-500 mb-1">
            Class Teacher:{" "}
            <span className="font-bold text-gray-800">Tosin J. A.</span>
          </p>
        </div>

        <div>
          <p className="text-md text-gray-500 mb-1">
            No. in Class: <span className="font-bold text-gray-800">30</span>
          </p>
        </div>
        <div>
          <p className="text-md text-gray-500 mb-1">
            Present:{" "}
            <span className="font-bold text-gray-800 text-green-600">20</span>
          </p>
        </div>
        <div>
          <p className="text-md text-gray-500 mb-1">
            Absent:{" "}
            <span className="font-bold text-gray-800 text-red-600">10</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1">
        {studentData.map((student) => (
          <div
            key={student.id}
            className="flex items-center justify-between py-3 border-b border-gray-500"
          >
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-400 font-medium">
                {student.id}
              </span>
              <span className="text-sm text-gray-800 font-medium">
                {student.name}
              </span>
            </div>
            <span
              className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                student.status === "Present"
                  ? "bg-[#22c55e] text-white"
                  : "bg-[#b91c1c] text-white"
              }`}
            >
              {student.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassAttendanceDetail;
