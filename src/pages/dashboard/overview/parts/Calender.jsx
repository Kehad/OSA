import { Plus } from "lucide-react";
import { useState } from "react";

// Calendar Component
const Calendar = () => {
  const [currentDate] = useState(new Date(2024, 9, 26)); // October 2024

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    // Get previous month's last days
    const prevMonth = new Date(year, month - 1, 0);
    const prevMonthDays = prevMonth.getDate();

    const days = [];

    // Add previous month's trailing days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === 26; // Highlighting 26th as shown in image
      days.push({
        day,
        isCurrentMonth: true,
        isToday,
      });
    }

    // Add next month's leading days
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    return days;
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Upcoming Events
      </h3>

      {/* Calendar Grid */}
      <div className="mb-6">
        {/* Week headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map((day) => (
            <div
              key={day}
              className="text-center py-2 text-xs font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((date, index) => (
            <div
              key={index}
              className={`
                  aspect-square flex items-center justify-center text-sm cursor-pointer rounded-lg
                  ${date.isCurrentMonth ? "text-gray-900" : "text-gray-300"}
                  ${
                    date.isToday
                      ? "bg-gray-900 text-white font-medium"
                      : "hover:bg-gray-100"
                  }
                `}
            >
              {date.day}
            </div>
          ))}
        </div>
      </div>

      {/* Create Event Button */}
      <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 mb-6">
        <Plus className="h-4 w-4" />
        <span className="font-medium">Create event</span>
      </button>

      {/* Events List */}
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">October</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-xs text-gray-500 mb-1">
                  Monday, OCT 8, 2024
                </p>
                <p className="text-sm font-medium text-gray-900">
                  First Term Resumption, 2024/2025 Academic Session
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-xs text-gray-500 mb-1">
                  Monday, OCT 8, 2024
                </p>
                <p className="text-sm font-medium text-gray-900">
                  First Term Resumption, 2024/2025 Academic Session
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">October</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-xs text-gray-500 mb-1">
                  Monday, OCT 8, 2024
                </p>
                <p className="text-sm font-medium text-gray-900">
                  First Term Resumption, 2024/2025 Academic Session
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-xs text-gray-500 mb-1">
                  Monday, OCT 8, 2024
                </p>
                <p className="text-sm font-medium text-gray-900">
                  First Term Resumption, 2024/2025 Academic Session
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;