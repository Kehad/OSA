import React from "react";
import { Download } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import AttendanceStatsCard from "./AttendanceStatsCard";

import { AttendanceDashboardProps } from "../types";

const AttendanceDashboard: React.FC<AttendanceDashboardProps> = ({
  stats,
  weeklyData,
  onViewSchool,
}) => {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Today</h2>
        <button className="bg-[#1C3A1C] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#152a15] transition-colors font-bold">
          <Download className="w-5 h-5" /> Export
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {stats.map((stat, idx) => (
          <AttendanceStatsCard
            key={idx}
            {...stat}
            onViewClick={() => onViewSchool(stat.title.includes("Primary") ? "primary" : "secondary")}
          />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-gray-900">This week</h3>
            <div className="flex gap-4 text-xs font-bold">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-green-500" /> Present
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-red-700" /> Absent
              </div>
            </div>
          </div>
          <p className="text-sm font-bold text-gray-800 mb-6">24/10/2024 - 28/10/2024</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} label={{ value: 'In percentage (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: '10px', fill: '#999' } }} />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="present" fill="#22c55e" radius={[4, 4, 0, 0]} barSize={12} />
                <Bar dataKey="absent" fill="#b91c1c" radius={[4, 4, 0, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-xs font-bold text-gray-800 mt-4">Days of the week</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-gray-900">This month</h3>
            <div className="flex gap-4 text-xs font-bold">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-green-500" /> Present
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-red-700" /> Absent
              </div>
            </div>
          </div>
          <p className="text-sm font-bold text-gray-800 mb-6">24/10/2024 - 28/10/2024</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} label={{ value: 'In percentage (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: '10px', fill: '#999' } }} />
                <Tooltip />
                <Line type="monotone" dataKey="present" stroke="#22c55e" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="absent" stroke="#b91c1c" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-xs font-bold text-gray-800 mt-4">Days of the week</p>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDashboard;
