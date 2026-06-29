import React from "react";

interface CalendarViewSelectorProps {
  view: "Year" | "Session" | "Term";
  setView: (view: "Year" | "Session" | "Term") => void;
}

const CalendarViewSelector: React.FC<CalendarViewSelectorProps> = ({ view, setView }) => {
  const options: ("Year" | "Session" | "Term")[] = ["Year", "Session", "Term"];

  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-gray-700 font-bold">View by:</span>
      <div className="flex bg-gray-100 p-1 rounded-full">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setView(opt)}
            className={`px-6 py-1.5 rounded-full text-sm font-bold transition-all ${
              view === opt
                ? "bg-[#D9C580]/30 text-gray-800 shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalendarViewSelector;
