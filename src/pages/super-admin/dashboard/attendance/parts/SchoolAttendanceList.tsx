import React from "react";
import { ArrowLeft, Calendar, Download, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { SchoolAttendanceListProps } from "../types";

const schoolData = Array(10).fill({
  id: "01",
  class: "Class",
  total: 30,
  present: 20,
  absent: 10,
  teacher: "Tosin J. A.",
});

const SchoolAttendanceList: React.FC<SchoolAttendanceListProps> = ({
  schoolName,
  onBack,
  onClassClick,
}) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">{schoolName}</h2>
        </div>
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 bg-white">
              <span className="text-sm font-bold text-gray-400 border-r pr-2 mr-2">Date</span>
              <span className="text-sm text-gray-800">10 - 03 - 2025</span>
              <Calendar className="w-5 h-5 text-gray-400" />
           </div>
           <button className="bg-[#1C3A1C] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#152a15] transition-colors font-bold">
            <Download className="w-5 h-5" /> Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-gray-100">
              <TableHead className="text-gray-400 font-medium py-4 px-6 text-sm">No.</TableHead>
              <TableHead className="text-gray-400 font-medium py-4 px-6 text-sm">Class</TableHead>
              <TableHead className="text-gray-400 font-medium py-4 px-6 text-sm">No. in class</TableHead>
              <TableHead className="text-gray-400 font-medium py-4 px-6 text-sm">No. present</TableHead>
              <TableHead className="text-gray-400 font-medium py-4 px-6 text-sm">No. absent</TableHead>
              <TableHead className="text-gray-400 font-medium py-4 px-6 text-sm">Class teacher</TableHead>
              <TableHead className="text-gray-400 font-medium py-4 px-6 text-sm text-right">
                <MoreHorizontal className="w-5 h-5 ml-auto" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schoolData.map((row, idx) => (
              <TableRow 
                key={idx} 
                className="hover:bg-gray-50/50 cursor-pointer transition-colors border-b border-gray-50 last:border-0"
                onClick={() => onClassClick("class-1")}
              >
                <TableCell className="py-5 px-6 text-gray-600 font-medium">{row.id}</TableCell>
                <TableCell className="py-5 px-6 text-gray-600 font-medium">{row.class}</TableCell>
                <TableCell className="py-5 px-6 text-gray-900 font-bold">{row.total}</TableCell>
                <TableCell className="py-5 px-6 text-gray-900 font-bold">{row.present}</TableCell>
                <TableCell className="py-5 px-6 text-gray-900 font-bold">{row.absent}</TableCell>
                <TableCell className="py-5 px-6 text-gray-600 font-medium">{row.teacher}</TableCell>
                <TableCell className="py-5 px-6 text-right">
                  <MoreHorizontal className="w-5 h-5 text-gray-400 ml-auto" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-8 mt-8">
        <button className="flex items-center gap-2 px-6 py-2 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all">
          <ChevronLeft className="w-5 h-5" /> Previous
        </button>
        <span className="text-sm font-bold text-gray-800">01 to 10</span>
        <button className="flex items-center gap-2 px-6 py-2 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all">
          Next <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SchoolAttendanceList;
