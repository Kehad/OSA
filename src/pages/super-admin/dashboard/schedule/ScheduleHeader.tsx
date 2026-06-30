import React from "react";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { label: "Timetable", link: "/super-admin/schedule/timetable" },
  { label: "Calendar", link: "/super-admin/schedule/calendar" },
  { label: "Events", link: "/super-admin/schedule/events" },
];

interface ScheduleHeaderProps {
  title: string;
}

const ScheduleHeader: React.FC<ScheduleHeaderProps> = ({ title }) => {
  const location = useLocation();

  return (
    <div className="mb-6">
      {title && <h1 className="text-2xl font-bold text-gray-800 mb-8">{title}</h1>}
      <div className="flex justify-center border-b border-gray-200 mb-6">
        <div className="flex gap-12 md:gap-32">
          {tabs.map((tab) => {
            // Check if current path includes the tab link to keep it active even on sub-routes
            const isActive = location.pathname.includes(tab.link);
            return (
              <Link
                key={tab.link}
                to={tab.link}
                className={`pb-4 px-4 md:px-10 text-base md:text-lg font-medium transition-colors relative ${
                  isActive
                    ? "text-[#1C3519]"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.label}
                {isActive && (
                  <div className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-yellow-400 rounded-t-full" />
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
