import React from "react";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { label: "Timetable", link: "/schedule/timetable" },
  { label: "Calendar", link: "/schedule/calendar" },
  { label: "Events", link: "/schedule/events" },
];

interface ScheduleHeaderProps {
  title: string;
}

const ScheduleHeader: React.FC<ScheduleHeaderProps> = ({ title }) => {
  const location = useLocation();

  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">{title}</h1>
      <div className="flex justify-center border-b border-gray-200">
        <div className="flex gap-16">
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.link;
            return (
              <Link
                key={tab.link}
                to={tab.link}
                className={`pb-4 px-4 text-lg font-medium transition-colors relative ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 rounded-t-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScheduleHeader;
