import React from "react";
import { academicEvents } from "../data";

const CalendarSpecialDates: React.FC = () => {
  return (
    <div className="w-full lg:w-[35%] bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 self-start">
      <h2 className="text-xl font-bold text-gray-800 mb-8">Special dates</h2>
      
      <div className="space-y-10">
        {academicEvents.filter(group => group.year === 2024).map((group, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-wider">{group.month}</h3>
            <div className="space-y-8">
              {group.events.map((event, eventIdx) => (
                <div key={eventIdx} className="flex gap-4 group cursor-default">
                  <div className={`w-1 rounded-full flex-shrink-0 transition-transform ${event.type === 'highlighted' ? 'bg-[#1C3A1C]' : 'bg-yellow-400'}`} />
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{event.label}</p>
                    <p className="text-sm font-bold text-gray-800 leading-snug group-hover:text-green-900 transition-colors">
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
  );
};

export default CalendarSpecialDates;
