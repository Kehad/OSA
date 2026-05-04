import React, { useState } from "react";
import ScheduleHeader from "./ScheduleHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { motion, AnimatePresence } from "framer-motion";

const specialDates = [
  {
    month: "October",
    events: [
      {
        date: "Monday, OCT 8, 2024",
        title: "First Term Resumption, 2024/2025 Academic Session",
      },
      {
        date: "Monday, OCT 8, 2024",
        title: "First Term Resumption, 2024/2025 Academic Session",
      },
    ],
  },
  {
    month: "October",
    events: [
      {
        date: "Monday, OCT 8, 2024",
        title: "First Term Resumption, 2024/2025 Academic Session",
      },
      {
        date: "Monday, OCT 8, 2024",
        title: "First Term Resumption, 2024/2025 Academic Session",
      },
    ],
  },
  {
    month: "October",
    events: [
      {
        date: "Monday, OCT 8, 2024",
        title: "First Term Resumption, 2024/2025 Academic Session",
      },
    ],
  },
];

const CalendarPage = () => {
  const [startMonth, setStartMonth] = useState(new Date(2024, 0)); // Start with Jan 2024
  
  const handleNext = () => {
    const nextStart = new Date(startMonth);
    nextStart.setMonth(startMonth.getMonth() + 4);
    setStartMonth(nextStart);
  };

  const handlePrev = () => {
    const prevStart = new Date(startMonth);
    prevStart.setMonth(startMonth.getMonth() - 4);
    setStartMonth(prevStart);
  };

  const getVisibleMonths = () => {
    return Array.from({ length: 4 }).map((_, i) => {
      const d = new Date(startMonth);
      d.setMonth(startMonth.getMonth() + i);
      return {
        name: d.toLocaleString("default", { month: "long" }),
        date: d,
      };
    });
  };

  const visibleMonths = getVisibleMonths();

  const modifiers = {
    highlighted: [new Date(2024, 1, 26)],
    outlined: [
      new Date(2024, 2, 21),
      new Date(2024, 2, 26),
      new Date(2024, 3, 14),
      new Date(2024, 3, 15),
      new Date(2024, 3, 16),
      new Date(2024, 3, 17),
      new Date(2024, 3, 18),
    ],
  };

  const modifiersStyles = {
    highlighted: { backgroundColor: "#1C3A1C", color: "white", fontWeight: "bold", borderRadius: "6px" },
    outlined: { border: "1.5px solid #1C3A1C", color: "#1C3A1C", borderRadius: "6px" },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-lato">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScheduleHeader title="Calendar" />

        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          {/* Main Calendar Grid */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={startMonth.toISOString()}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {visibleMonths.map((m) => (
                  <div key={m.name} className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex justify-center hover:shadow-md transition-shadow">
                   <Calendar
                      month={m.date}
                      hideNavigation
                      modifiers={modifiers}
                      modifiersStyles={modifiersStyles}
                      formatters={{
                        formatCaption: (date) => date.toLocaleString("default", { month: "long" })
                      }}
                      classNames={{
                        month: "space-y-3 w-full",
                        month_caption: "flex justify-center pt-1 relative items-center mb-6",
                        caption_label: m.name === "February" 
                          ? "bg-[#1C3A1C] text-white px-4 py-1.5 rounded-md text-[0.7rem] font-semibold tracking-wide" 
                          : "text-gray-400 text-[0.75rem] font-medium",
                        weekdays: "flex justify-around mb-2",
                        weekday: "text-gray-400 w-9 font-normal text-[0.7rem]text-center",
                        week: "flex w-full mt-1 justify-around",
                        day: "h-9 w-9 cursor-pointer text-center text-sm m-1 relative flex items-center justify-center",
                        day_button: "h-8 w-8 p-0 font-normal text-sm hover:bg-gray-50 rounded-md transition-colors flex items-center justify-center",
                        selected: "bg-[#1C3A1C] text-white hover:bg-[#1C3A1C] rounded-md font-normal",
                        outside: "text-gray-600 opacity-30",
                        disabled: "text-gray-200 opacity-30",
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center gap-6 mt-12">
              <button 
                onClick={handlePrev}
                className="flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
              >
                <ChevronLeft className="w-5 h-5 text-gray-400" />
                Previous
              </button>
              <button 
                onClick={handleNext}
                className="flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
              >
                Next
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Sidebar: Special Dates */}
          <div className="w-full lg:w-96 bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 self-start sticky top-8">
            <h2 className="text-2xl font-montserrat font-bold text-gray-800 mb-8">Special dates</h2>
            
            <div className="space-y-10">
              {specialDates.map((group, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-montserrat font-bold text-gray-800 mb-5">{group.month}</h3>
                  <div className="space-y-6">
                    {group.events.map((event, eventIdx) => (
                      <div key={eventIdx} className="flex gap-5 group cursor-default">
                        <div className="w-1 bg-yellow-400 rounded-full flex-shrink-0 group-hover:scale-y-110 transition-transform" />
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">{event.date}</p>
                          <p className="text-[0.95rem] font-bold text-gray-800 leading-snug group-hover:text-green-900 transition-colors">
                            {event.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
