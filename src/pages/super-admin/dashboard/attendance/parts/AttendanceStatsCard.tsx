import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import { AttendanceStatsCardProps } from "../types";

const AttendanceStatsCard: React.FC<AttendanceStatsCardProps> = ({
  title,
  date,
  present,
  absent,
  total,
  color,
  secondaryColor,
  onViewClick,
}) => {
  const data = [
    { name: "Present", value: present },
    { name: "Absent", value: absent },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <span className="text-sm text-gray-400">{date}</span>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-40 h-40 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                <Cell fill={color} />
                <Cell fill={secondaryColor} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-bold text-gray-700">{present}%</span>
            <span className="text-[10px] text-gray-400 leading-tight">Present</span>
          </div>
          {/* Legend indicators for internal donut segments */}
          <div className="absolute top-8 right-0 text-[10px] text-gray-400">
             <span className="block font-bold text-gray-700">{absent}%</span>
             <span>Absent</span>
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Total no. of students:</span>
            <span className="font-bold text-gray-800">{total}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">No. of students present:</span>
            <span className="font-bold text-gray-800">{(total * present) / 100}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">No. of students absent:</span>
            <span className="font-bold text-gray-800">{(total * absent) / 100}</span>
          </div>
        </div>
      </div>

      <button
        onClick={onViewClick}
        className="self-end text-blue-500 font-bold text-sm hover:underline mt-2"
      >
        View attendance
      </button>
    </div>
  );
};

export default AttendanceStatsCard;
