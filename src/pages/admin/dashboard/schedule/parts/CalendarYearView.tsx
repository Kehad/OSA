import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

import { CalendarYearViewProps } from "../types";

const CalendarYearView: React.FC<CalendarYearViewProps> = ({
  visibleMonths,
  selectedDate,
  setSelectedDate,
  modifiers,
  handlePrev,
  handleNext,
}) => {
  const modifiersStyles = {
    highlighted: { backgroundColor: "#1C3A1C", color: "white", fontWeight: "bold", borderRadius: "6px" },
    outlined: { border: "1.5px solid #1C3A1C", color: "#1C3A1C", borderRadius: "6px" },
  };

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
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
      </div>
      
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
  );
};

export default CalendarYearView;
