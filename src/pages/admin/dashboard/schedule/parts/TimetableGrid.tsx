import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TimetableGridProps } from "../types";

const TimetableGrid: React.FC<TimetableGridProps> = ({ 
  timeSlots, 
  timetableData, 
  isEditMode,
  onCellChange 
}) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <Table className="w-full border-collapse">
        <TableHeader>
          <TableRow className="bg-gray-50/50 hover:bg-gray-50/50 border-none">
            <TableHead className="h-16 border-r border-b border-gray-100 text-gray-500 font-bold text-sm text-center px-4">Time</TableHead>
            {timeSlots.map((time) => (
              <TableHead key={time} className="h-16 border-r border-b border-gray-100 text-gray-500 font-medium text-xs text-center px-4 min-w-[120px]">
                {time}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {timetableData.map((row) => (
            <TableRow key={row.day} className="hover:bg-gray-50/30 transition-colors border-none">
              <TableCell className="border-r border-b border-gray-100 text-gray-500 font-medium text-sm bg-gray-50/30 text-center px-4 h-16">
                {row.day}
              </TableCell>
              {row.periods.map((period: string, idx: number) => {
                const isBreak = period.includes("Break");
                return (
                  <TableCell 
                    key={idx} 
                    className={`border-r border-b border-gray-100 p-0 h-16 ${
                      isBreak ? "bg-gray-50/50" : ""
                    }`}
                  >
                    {isEditMode && !isBreak ? (
                      <input
                        type="text"
                        value={period}
                        onChange={(e) => onCellChange?.(row.day, idx, e.target.value)}
                        className="w-full h-full bg-transparent px-4 text-center text-sm font-medium text-gray-800 outline-none focus:bg-green-50/50 focus:ring-1 focus:ring-green-900/10 transition-all"
                        placeholder="Subject"
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center px-4 text-center text-sm font-medium ${
                        isBreak ? "text-gray-400 italic" : "text-gray-800"
                      }`}>
                        {period}
                      </div>
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TimetableGrid;
