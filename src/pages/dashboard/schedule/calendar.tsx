import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import ScheduleHeader from "./ScheduleHeader";
import { academicEvents } from "./data";
import { Calendar } from "@/components/ui/calendar";


const CalendarPage = () => {
  const [startMonth, setStartMonth] = useState(new Date(2024, 0)); // Start with Jan 2024
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  
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

  const visibleMonths = useMemo(() => {
    return Array.from({ length: 4 }).map((_, i) => {
      const d = new Date(startMonth);
      d.setMonth(startMonth.getMonth() + i);
      return {
        name: d.toLocaleString("default", { month: "long" }),
        date: d,
      };
    });
  }, [startMonth]);

  // Derive modifiers from the event data
  const modifiers = useMemo(() => {
    const highlighted: Date[] = [];
    const outlined: Date[] = [];
    
    academicEvents.forEach(group => {
      group.events.forEach(event => {
        if (event.type === "highlighted") highlighted.push(event.date);
        else outlined.push(event.date);
      });
    });
    
    return { highlighted, outlined };
  }, []);

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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8"
              >
                {visibleMonths.map((m) => (
                  <div key={m.name} className="bg-white rounded-[2rem] w-max p-8 shadow-sm border border-gray-100 flex justify-center hover:shadow-md transition-all">
                   <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      month={m.date}
                      hideNavigation
                      modifiers={modifiers}
                      modifiersStyles={modifiersStyles}
                      formatters={{
                        formatCaption: (date) => date.toLocaleString("default", { month: "long" })
                      }}
                      classNames={{
                        month: "space-y-4 w-full",
                        month_caption: "flex justify-center pt-1 relative items-center mb-6",
                        caption_label: m.name === "February" 
                          ? "bg-[#1C3A1C] text-white px-6 py-2 rounded-md text-[0.75rem] font-bold tracking-wide" 
                          : "text-black text-[0.8rem] font-bold",
                        weekdays: "flex justify-around mb-2",
                        weekday: "text-black w-10 font-bold text-[0.75rem] text-center",
                        week: "flex w-full mt-1 justify-around",
                        day: "h-10 w-10 cursor-pointer m-1  text-center text-sm relative flex items-center justify-center",
                        day_button: "h-9 w-9 p-0 font-medium text-sm text-black hover:bg-gray-100 rounded-md transition-colors flex items-center justify-center",
                        selected: "bg-yellow-400 text-black hover:bg-yellow-400 rounded-md font-bold border-none",
                        outside: "text-gray-300",
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
                className="flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-xl text-black font-bold hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
              >
                <ChevronLeft className="w-5 h-5 text-black" />
                Previous
              </button>
              <button 
                onClick={handleNext}
                className="flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-xl text-black font-bold hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
              >
                Next
                <ChevronRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>

          {/* Sidebar: Special Dates */}
          <div className="w-full lg:w-96 bg-white rounded-[2rem] shadow-sm border border-gray-100 p-5 self-start sticky top-8">
            <h2 className="text-2xl font-montserrat   text-black mb-8">Special dates</h2>
            
            <div className="space-y-10">
              {academicEvents.filter(group => group.year === 2024).map((group, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-montserrat font-bold text-black mb-5">{group.month}</h3>
                  <div className="space-y-6">
                    {group.events.map((event, eventIdx) => (
                      <div key={eventIdx} className="flex gap-5 group cursor-default">
                        <div className={`w-1 rounded-full flex-shrink-0 transition-transform ${event.type === 'highlighted' ? 'bg-[#1C3A1C]' : 'bg-yellow-400'}`} />
                        <div>
                          <p className="text-xs  text-gray-500 font-bold uppercase tracking-wider mb-2">{event.label}</p>
                          <p className="text-[0.95rem] font-bold text-black leading-snug group-hover:text-green-900 transition-colors">
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
