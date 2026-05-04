import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { timeSlots, timetableData } from "./data";

import ScheduleHeader from "./ScheduleHeader";
import emptysearch from "@/assets/empty-search.png";


const AdminScheduleTimetable = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const [filters, setFilters] = useState({
    session: "",
    term: "",
    format: "",
    class: "",
  });

  const handleSearch = () => {
    setHasSearched(true);
  };

  const FilterSelect = ({ label, placeholder, value, options, onChange }: any) => (
    <div className="flex flex-col md:flex-row md:items-center gap-4 w-full max-w-2xl mx-auto mb-6">
      <label className="w-24 text-gray-700 font-bold text-sm shrink-0">{label}</label>
      <div className="relative flex-1">
        <select 
          className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-5 py-3.5 pr-12 text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-900/10 transition-all cursor-pointer"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt: string) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-lato">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScheduleHeader title="Timetable" />
        
        <div className="mt-10 max-w-4xl mx-auto">
          {/* Filters */}
          <div className="space-y-2">
            <FilterSelect 
              label="Session" 
              placeholder="Select Session" 
              value={filters.session}
              options={["2023/2024", "2024/2025"]}
              onChange={(val: string) => setFilters({...filters, session: val})}
            />
            <FilterSelect 
              label="Term" 
              placeholder="Select Term" 
              value={filters.term}
              options={["First Term", "Second Term", "Third Term"]}
              onChange={(val: string) => setFilters({...filters, term: val})}
            />
            <FilterSelect 
              label="Format" 
              placeholder="Select format" 
              value={filters.format}
              options={["Regular", "Exam", "Summer"]}
              onChange={(val: string) => setFilters({...filters, format: val})}
            />
            <FilterSelect 
              label="Class" 
              placeholder="Select a class" 
              value={filters.class}
              options={["Basic 3 A", "Basic 3 B", "Basic 4 A"]}
              onChange={(val: string) => setFilters({...filters, class: val})}
            />
          </div>

          <div className="flex justify-center mt-10">
            <button 
              onClick={handleSearch}
              className="w-full max-w-lg bg-[#1C3A1C] text-white font-bold py-4 rounded-xl hover:bg-[#152a15] active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-16">
          <AnimatePresence mode="wait">
            {!hasSearched ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center py-20"
              >
                <div className="relative mb-8">
                  <img src={emptysearch} alt="Empty Search" className="w-40 h-40" />
                </div>
                <p className="text-gray-400 text-2xlfont-montserrat">You've not set your filter</p>
              </motion.div>
            ) : (
              <motion.div 
                key="table"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden"
              >
                <Table className="w-full border-collapse">
                  <TableHeader>
                    <TableRow className="bg-gray-50/50 hover:bg-gray-50/50 border-none">
                      <TableHead className="h-20 border-r border-b border-gray-100 text-gray-800 font-bold text-lg text-center px-6">Time</TableHead>
                      {timeSlots.map((time) => (
                        <TableHead key={time} className="h-20 border-r border-b border-gray-100 text-gray-800 font-bold text-sm text-center px-6 min-w-[120px]">
                          {time}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {timetableData.map((row) => (
                      <TableRow key={row.day} className="hover:bg-gray-50/30 transition-colors border-none">
                        <TableCell className="border-r border-b border-gray-100 text-gray-800 font-bold text-lg bg-gray-50/30 text-center px-6">
                          {row.day}
                        </TableCell>
                        {row.periods.map((period, idx) => (
                          <TableCell 
                            key={idx} 
                            className={`border-r border-b border-gray-100 text-gray-600 text-sm text-center font-medium px-6 ${
                              period.includes("Break") ? "bg-gray-100/50 text-gray-400 italic" : ""
                            }`}
                          >
                            {period}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AdminScheduleTimetable;